const { workerData, parentPort } = require("worker_threads");

function main(data) {
  console.log(data);
}

console.log(process.pid);

parentPort.postMessage(main(workerData));
parentPort.postMessage(main(workerData));
parentPort.postMessage(main(workerData));
