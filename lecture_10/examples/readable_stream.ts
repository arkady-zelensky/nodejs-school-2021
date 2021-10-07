import { Readable } from 'stream';
import * as fs from 'fs';

class CustomReadable extends Readable {
  private fileSizeInBytes: number = 16 * 1024 * 1024;
  private simulatedSpeed: number = 1024 * 1024;

  constructor() {
    super();
  }

  private _pushBytes(bytes: number) {
    if (bytes > this.fileSizeInBytes) {
      this.push(Buffer.alloc(this.fileSizeInBytes, 0x00));
    } else {
      this.push(Buffer.alloc(bytes, 0x00));
    }

    this.fileSizeInBytes -= bytes;
  }

  public _read(bytes: number) {
    if (this.fileSizeInBytes > 0) {
      this.simulatedSpeed === Infinity
        ? this._pushBytes(bytes)
        : setTimeout(
            () => this._pushBytes(bytes),
            ((1000 / this.simulatedSpeed) * bytes) / 1024,
          );
    } else {
      this.push(null);
    }
  }
}

(async () => {
  const readStream = new CustomReadable();

  const writeStream = fs.createWriteStream('./write_stream.bin');

  readStream.pipe(writeStream);

  await new Promise((resolve) => {
    writeStream.on('finish', resolve);
  });

  console.log('done');
})();
