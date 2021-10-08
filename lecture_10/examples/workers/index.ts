import { Worker } from "worker_threads";

const runService = (params) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./workers/thread.js", { workerData: params });

    worker.on("message", resolve);

    worker.on("error", reject);

    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error());
      }
    });
  });
};

(async () => {
  const result = await runService("test");

  console.log(result);
})();
