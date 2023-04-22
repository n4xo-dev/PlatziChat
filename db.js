import * as db from 'mongoose';

export async function connect(dbURI) {
  // const dbURI = 'mongodb+srv://n4xo:9808@fcc-mongo-ilopezosa.zmzkq0a.mongodb.net/?retryWrites=true&w=majority';
  await db.connect(dbURI, {
    useNewUrlParser: true
  });
  console.log('[db] connected');
}