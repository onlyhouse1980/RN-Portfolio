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

const STATIC_FALLBACK_PROJECTS = [
  { num: '01', title: 'BarStart DE\nRef. App', year: '2026', link: 'https://bartender-blue.vercel.app', fallbackImage: '/barstart.png', tags: ['Next.js', 'Rest API', 'Expo'] },
  { num: '02', title: 'OBCG\nPortal', year: '2026', link: 'https://obcg-modern.vercel.app', fallbackImage: '/obcg.png', tags: ['Next.Js', 'MongoDB', 'Node'] },
  { num: '03', title: 'Legal Flow', year: '2026', link: 'https://kanzlei-intake-suite.online', fallbackImage: '/legal-flow.png', tags: ['OpenAI', 'MongoDB', 'Stripe'] },
  { num: '04', title: 'Launchpad\nGemini Powered SaaS', year: '2025', link: 'https://saas-boilerplate-xi-rose.vercel.app', fallbackImage: '/launchpad.png', tags: ['Next.Js', 'Supabase', 'SaaS'] },
  { num: '05', title: 'Fine Truth\nForensic Audit', year: '2025', link: 'https://consumer-watchdog.vercel.app', fallbackImage: '/finetruth.png', tags: ['Next.js', 'Gemini 3.0 Pro', 'Analytics'] },
  { num: '06', title: 'Can We Talk?\nAI Assisted Communication Engine', year: '2025', link: 'https://therapy.anewshade.de', fallbackImage: '/canwetalk.png', tags: ['Websockets', 'Gemini', 'Multi-Chat'] },
  { num: '07', title: 'UX/UI\nEffects', year: '2025', link: 'https://lumen-b4-after.vercel.app', fallbackImage: '/uxui.png', tags: ['React', 'NextJs', 'Interactive'] },
  { num: '08', title: 'Lifestory\nAI Creative', year: '2025', link: 'https://apk-dl-site.vercel.app/', fallbackImage: '/lifestory.png', tags: ['Kotlin', 'Java', 'Android'] },
  { num: '09', title: 'TSLearn\nTypescript', year: '2026', link: 'https://ts-learn-lac.vercel.app/', fallbackImage: '/tslearn.png', tags: ['Typescript', 'Three.js', 'WebGL'] },
  { num: '10', title: 'HandyWrap\nE-Commerce', year: '2025', link: 'https://casecobra-ihyo.vercel.app/', fallbackImage: '/handywrap.png', tags: ['Radix', 'Zod', 'Prisma'] },
  { num: '11', title: 'Learn Next.Js\nNext.Js', year: '2026', link: 'https://next-learn-delta-two.vercel.app', fallbackImage: '/nextlearn.png', tags: ['Next.Js', 'Three.js', 'Gsap'] },
  { num: '12', title: 'PDFKit\nNext.Js', year: '2026', link: 'https://pdf-online-editor-mu.vercel.app', fallbackImage: '/pdfkit.png', tags: ['Next.Js', 'PDF-Lib', 'React-PDF'] },
  { num: '13', title: 'Next Practice', year: '2026', link: 'https://github.com/onlyhouse1980/NextPracticeApp', fallbackImage: '/nextpractice.png', tags: ['Next.js 16', 'Interactive', 'App Router'] },
  { num: '14', title: 'Communiversity', year: '2026', link: 'https://communiversity.vercel.app', fallbackImage: '/communiversity.png', tags: ['Next.js', 'Gemini', 'Learning'] },
  { num: '15', title: 'AdminPilot\nLife Admin', year: '2026', link: 'https://adminpilot.ryanernstnyberg.com', fallbackImage: '/adminpilot.png', tags: ['Next.js 16', 'Gemini', 'PWA'] },
  { num: '16', title: 'VPD Tracker', year: '2026', link: 'https://vpd-calc.vercel.app', fallbackImage: '/VPDTracker.png', tags: ['PWA', 'Next.Js', 'Interactive'] },
  { num: '18', title: 'CallBack AI\nMissed Call Recovery', year: '2026', link: 'https://missed-call-recovery-dashboard.vercel.app', fallbackImage: 'https://res.cloudinary.com/ufqopmsk/image/upload/v1786150486/portfolio/projects/missedcall.png', tags: ['Next.js', 'Twilio SMS', 'Gemini', 'PostgreSQL', 'Calendly API'] },
  { num: '19', title: 'ERechnungFix\nE-Invoicing SaaS', year: '2026', link: 'https://erechnungfix-mvp.vercel.app', fallbackImage: 'https://res.cloudinary.com/ufqopmsk/image/upload/v1786150472/portfolio/projects/erechnungfix.png', tags: ['Next.js 16', 'React 19', 'TypeScript', 'XML / ZUGFeRD', 'Tailwind CSS'] }
];

export async function getProjects() {
  try {
    const collection = await getProjectsCollection();
    const projects = await collection
      .find({}, { projection: PROJECT_FIELDS })
      .sort({ sortOrder: 1, num: 1 })
      .toArray();
    return projects.length > 0 ? projects : STATIC_FALLBACK_PROJECTS;
  } catch (error) {
    console.warn('MongoDB projects fetch failed, returning static fallback projects:', error?.message || error);
    return STATIC_FALLBACK_PROJECTS;
  }
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
