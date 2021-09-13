import * as path from 'path';
import * as fs from 'fs';
import * as util from 'util';

const makeDir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);
const readFile = util.promisify(fs.readFile);
const renameFile = util.promisify(fs.rename);

(async function () {
  // create directory
  await makeDir(path.join(__dirname, '/test'), {});
  console.log('Folder created...');

  // Create and write to file
  await writeFile(path.join(__dirname, '/test', 'textfile.txt'), 'Important file data.');
  console.log('File written to...');

  // File append
  await appendFile(path.join(__dirname, '/test', 'textfile.txt'),' I love Node.js')
  console.log('File written to...');

  // Read file
  const data = await readFile(path.join(__dirname, '/test', 'textfile.txt'), 'utf8');
  console.log(data);

  // Rename file
  await renameFile(path.join(__dirname, '/test', 'textfile.txt'), path.join(__dirname, '/test', 'helloworld.txt'));
  console.log('File renamed...');
})();
