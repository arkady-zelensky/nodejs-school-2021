import { app } from './app';

process.on('unhandledRejection', (error, p) => {
  throw error;
});

process.on('uncaughtException', (error) => {
  throw error;
});

(async () => {
  app.listen(3000, () => {
    console.info('http_server_running');
  });
})();
