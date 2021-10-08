import { Readable, Writable } from "stream";

class CustomWritable extends Writable {
  private fileSizeInBytes: number = 16 * 1024 * 1024;
  private simulatedSpeed: number = 1024 * 1024;

  private chunkIndex = 0;

  constructor() {
    super();
  }

  public _write(
    chunk: Buffer,
    encoding: string,
    callback: (error?: Error) => void
  ) {
    console.log(this.chunkIndex++);

    if (this.fileSizeInBytes > 0) {
      this.fileSizeInBytes -= chunk.length;

      this.simulatedSpeed === Infinity
        ? callback()
        : setTimeout(
            callback,
            ((1000 / this.simulatedSpeed) * chunk.length) / 1024
          );
    } else {
      callback(new Error("bad_data"));
    }
  }

  public _final(callback: (error?: Error) => void) {
    if (this.fileSizeInBytes === 0) {
      callback();
    } else {
      callback(new Error("bad_data"));
    }
  }
}

(async () => {
  const readStream = Readable.from(Buffer.alloc(16 * 1024 * 1024));

  const writeStream = new CustomWritable();

  readStream.pipe(writeStream);

  await new Promise((resolve) => {
    writeStream.on("finish", resolve);
  });

  console.log("done");
})();
