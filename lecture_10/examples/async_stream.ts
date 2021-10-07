import { Readable } from 'stream';

(async () => {
  const readStream = Readable.from(Buffer.alloc(16 * 1024 * 1024));

  for await (const chunk of readStream) {
    console.log(chunk.length);
  }
})();
