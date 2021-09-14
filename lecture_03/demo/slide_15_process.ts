import _process from 'process';

if (_process.argv.length > 0) {
  console.log(_process.argv);
}

// provide an access to environment variables
console.log(_process.env.PARAM);
