import { Readable } from 'stream';

(async () => {
  const readStream = Readable.from(Buffer.alloc(16 * 1024 * 1024));

  while (true) {
    const chunk = readStream.read(1024);

    if (!chunk) {
      break;
    }

    console.log(chunk.length);
  }
})();
