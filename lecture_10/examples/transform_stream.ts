import { Readable, Transform } from 'stream';
import * as fs from 'fs';

class CustomTransform extends Transform {
  public _transform(
    chunk: Buffer,
    encoding: string,
    callback: (error?: Error, data?: Buffer) => void,
  ) {
    const newChunk = Buffer.alloc(chunk.length * 2, 0x01);

    this.push(newChunk);

    callback();
  }
}

(async () => {
  const readStream = Readable.from(Buffer.alloc(16 * 1024 * 1024));
  const writeStream = fs.createWriteStream('./transform_stream.bin');

  const transformStream = new CustomTransform();

  await new Promise((resolve) => {
    readStream.pipe(transformStream).pipe(writeStream).on('finish', resolve);
  });

  console.log('done');
})();
