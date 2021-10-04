import { app } from './app';
import { connectMongo } from './mongo';

process.on('unhandledRejection', (error, p) => {
  throw error;
});

process.on('uncaughtException', (error) => {
  throw error;
});

(async () => {
  const dbClient = await connectMongo();

  app.listen(3000, async () => {
    console.log('http_server_running');

    await dbClient.collection('api_stats').insertOne({
      startTime: new Date(),
    });
  });
})();
