import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

// all parameters
console.log(yargs(process.argv).argv);

const parser = yargs(hideBin(process.argv)).options({
  name: { type: 'string', default: 'guest'}
});

(async function () {
  const params = await parser.argv;
  console.log(`Hello, ${params.name}!`);
})();
