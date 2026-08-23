import { MongoClient } from 'mongodb';

function getDatabaseName(uri) {
  if (process.env.MONGODB_DB) return process.env.MONGODB_DB;

  try {
    const { pathname } = new URL(uri);
    return pathname.replace(/^\//, '') || 'portfolio';
  } catch {
    return 'portfolio';
  }
}

let cachedClient = globalThis.__portfolioMongoClient;

export async function getMongoDb() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI is not configured');
  }

  if (!cachedClient) {
    cachedClient = globalThis.__portfolioMongoClient = new MongoClient(uri);
  }

  await cachedClient.connect();
  return cachedClient.db(getDatabaseName(uri));
}

