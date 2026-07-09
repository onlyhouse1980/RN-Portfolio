import { v2 as cloudinary } from 'cloudinary';

const configured = Boolean(
  process.env.CLOUDINARY_URL
  || (
    process.env.CLOUDINARY_CLOUD_NAME
    && process.env.CLOUDINARY_API_KEY
    && process.env.CLOUDINARY_API_SECRET
  ),
);

if (!process.env.CLOUDINARY_URL) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

function fileNameSlug(name) {
  return String(name || 'project-image')
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    || 'project-image';
}

export async function uploadProjectImage(file) {
  if (!file || typeof file.arrayBuffer !== 'function' || file.size === 0) {
    throw new Error('Project image upload is required.');
  }

  if (!file.type?.startsWith('image/')) {
    throw new Error('Project image must be an image file.');
  }

  if (!configured) {
    throw new Error('Cloudinary credentials are not configured.');
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      {
        folder: 'portfolio/projects',
        public_id: `${Date.now()}-${fileNameSlug(file.name)}`,
        resource_type: 'image',
      },
      (error, result) => {
        if (error) {
          reject(new Error(error.message || 'Cloudinary upload failed.'));
          return;
        }

        resolve(result.secure_url);
      },
    );

    upload.end(buffer);
  });
}
