import * as readline from 'readline';

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  await new Promise<void>((resolve) => {
    readlineInterface.question('enter something\n', (answer) => {
      console.log('your answer', answer);

      resolve();
    });
  });

  readlineInterface.on('line', (line) => {
    if (line.toLowerCase() === 'exit') {
      process.exit();
    }
  });
})();
