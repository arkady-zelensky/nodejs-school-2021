import * as fs from 'fs';
import * as zlib from 'zlib';


let writeableStream = fs.createWriteStream('demo/streams-text.txt',
    {encoding: 'utf-8'}
);

writeableStream.write('Hello, world!');
writeableStream.write(' Continue writing \n');
writeableStream.end('Writing finished.');


writeableStream.on('finish', () => {
  let data = fs.readFileSync('demo/streams-text.txt', 'utf-8');
  console.log(data);
});




// Piping streams

let sourceStream = fs.createReadStream("demo/streams-text.txt", "utf-8");

let destStream = fs.createWriteStream("demo/streams-text.txt.gz");

let gzip = zlib.createGzip();

sourceStream
    .pipe(gzip)
    .pipe(destStream);

