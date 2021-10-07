const { workerData, parentPort } = require('worker_threads');

function main(data) {
  console.log(data);

  return 0;
}

parentPort.postMessage(main(workerData));
