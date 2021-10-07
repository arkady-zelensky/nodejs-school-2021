import * as crypto from 'crypto';

(async () => {
  const data = Buffer.alloc(16 * 1024 * 1024);

  const hash = crypto.createHash('sha256');

  for (const byte of data) {
    hash.update(Buffer.from([byte]));
  }

  console.log(hash.digest('hex'));
})();
