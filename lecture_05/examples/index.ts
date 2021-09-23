import * as net from 'net';
import * as http from 'http';

const httpServer = http.createServer((req, res) => {
  res.end();
});

httpServer.on('listening', async () => {
  console.log('listening');

  const netConnection = net.createConnection(3000, 'localhost', () => {
    console.log('createConnection');

    netConnection.write(`GET / HTTP/1.1\n\nHost: localhost\n\n`);
  });

  const allData: Buffer[] = [];

  netConnection.on('data', (data) => {
    console.log('data', data.length);

    allData.push(data);
  });

  const res = await new Promise<Buffer>((resolve) => {
    netConnection.on('end', () => {
      console.log('end');

      resolve(Buffer.concat(allData));
    });
  });

  console.log(res.toString('utf-8'));
});

httpServer.listen(3000, () => {
  console.log('server_running');
});
