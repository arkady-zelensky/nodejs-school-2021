import { MongoClient } from 'mongodb';

import { DB_HOST } from './config';

export async function connectMongo() {
  const client = await MongoClient.connect(`mongodb://${DB_HOST}`);

  return client.db('nodejs_school');
}
