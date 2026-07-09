import { getMongoDb } from './mongodb';
import { uploadProjectImage } from './cloudinary';

const PROJECT_FIELDS = {
  _id: 0,
  num: 1,
  title: 1,
  tags: 1,
  desc: 1,
  year: 1,
  link: 1,
  icon: 1,
  fallbackImage: 1,
  criticQuote: 1,
  criticLabel: 1,
  sortOrder: 1,
};

function cleanText(value) {
  return String(value || '').trim();
}

function parseTags(value) {
  return cleanText(value)
    .split(/[\n,]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function normalizeProject(project) {
  return {
    num: cleanText(project.num),
    title: cleanText(project.title),
    tags: Array.isArray(project.tags) ? project.tags.map(cleanText).filter(Boolean) : parseTags(project.tags),
    desc: cleanText(project.desc),
    year: cleanText(project.year),
    link: cleanText(project.link),
    icon: cleanText(project.icon) || '🔗',
    fallbackImage: cleanText(project.fallbackImage),
    ...(cleanText(project.criticQuote) ? { criticQuote: cleanText(project.criticQuote) } : {}),
    ...(cleanText(project.criticLabel) ? { criticLabel: cleanText(project.criticLabel) } : {}),
  };
}

function hasUploadedFile(file) {
  return Boolean(file && typeof file.arrayBuffer === 'function' && file.size > 0);
}

async function getProjectsCollection() {
  const db = await getMongoDb();
  const collection = db.collection('projects');
  await collection.createIndex({ num: 1 }, { unique: true });
  await collection.createIndex({ sortOrder: 1 });
  return collection;
}

export async function getProjects() {
  const collection = await getProjectsCollection();
  return collection
    .find({}, { projection: PROJECT_FIELDS })
    .sort({ sortOrder: 1, num: 1 })
    .toArray();
}

export async function createProjectFromForm(formData) {
  const collection = await getProjectsCollection();
  const project = normalizeProject({
    num: formData.get('num'),
    title: formData.get('title'),
    tags: formData.get('tags'),
    desc: formData.get('desc'),
    year: formData.get('year'),
    link: formData.get('link'),
    icon: formData.get('icon'),
    criticQuote: formData.get('criticQuote'),
    criticLabel: formData.get('criticLabel'),
  });

  if (!project.title || !project.desc || !project.year || !project.link || project.tags.length === 0) {
    throw new Error('Title, description, year, link, project image, and at least one tag are required.');
  }

  const lastProject = await collection.findOne({}, { sort: { sortOrder: -1, num: -1 } });
  const nextSortOrder = (lastProject?.sortOrder || 0) + 1;
  const nextNum = String(nextSortOrder).padStart(2, '0');
  const num = project.num || nextNum;
  const existingProject = await collection.findOne({ num }, { projection: { _id: 1 } });

  if (existingProject) {
    const error = new Error('A project with that number already exists.');
    error.code = 11000;
    throw error;
  }

  project.fallbackImage = await uploadProjectImage(formData.get('fallbackImageFile'));

  await collection.insertOne({
    ...project,
    num,
    sortOrder: nextSortOrder,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return num;
}

export async function updateProjectFromForm(formData) {
  const collection = await getProjectsCollection();
  const originalNum = cleanText(formData.get('originalNum'));
  const project = normalizeProject({
    num: formData.get('num'),
    title: formData.get('title'),
    tags: formData.get('tags'),
    desc: formData.get('desc'),
    year: formData.get('year'),
    link: formData.get('link'),
    icon: formData.get('icon'),
    fallbackImage: formData.get('currentFallbackImage'),
    criticQuote: formData.get('criticQuote'),
    criticLabel: formData.get('criticLabel'),
  });

  if (!originalNum) {
    throw new Error('Project number is required.');
  }

  if (!project.num || !project.title || !project.desc || !project.year || !project.link || project.tags.length === 0) {
    throw new Error('Project number, title, description, year, link, and at least one tag are required.');
  }

  const existingProject = await collection.findOne({ num: originalNum });

  if (!existingProject) {
    throw new Error('Project was not found.');
  }

  if (project.num !== originalNum) {
    const duplicateProject = await collection.findOne({ num: project.num }, { projection: { _id: 1 } });

    if (duplicateProject) {
      const error = new Error('A project with that number already exists.');
      error.code = 11000;
      throw error;
    }
  }

  const imageFile = formData.get('fallbackImageFile');

  if (hasUploadedFile(imageFile)) {
    project.fallbackImage = await uploadProjectImage(imageFile);
  }

  if (!project.fallbackImage) {
    throw new Error('Project image URL is required.');
  }

  const update = {
    $set: {
      ...project,
      sortOrder: existingProject.sortOrder || 0,
      updatedAt: new Date(),
    },
  };

  if (!project.criticQuote) {
    delete update.$set.criticQuote;
    update.$unset = { ...(update.$unset || {}), criticQuote: '' };
  }

  if (!project.criticLabel) {
    delete update.$set.criticLabel;
    update.$unset = { ...(update.$unset || {}), criticLabel: '' };
  }

  await collection.updateOne({ num: originalNum }, update);

  return project.num;
}

export async function deleteProjectByNum(num) {
  const collection = await getProjectsCollection();
  const cleanNum = cleanText(num);

  if (!cleanNum) {
    throw new Error('Project number is required.');
  }

  const result = await collection.deleteOne({ num: cleanNum });

  if (result.deletedCount === 0) {
    throw new Error('Project was not found.');
  }

  return cleanNum;
}
