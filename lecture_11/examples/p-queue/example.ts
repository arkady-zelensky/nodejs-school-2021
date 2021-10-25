import delay from "delay";
import PQueue from "p-queue";

const queue = new PQueue({ concurrency: 2 });

let count = 0;
queue.on("active", () => {
  console.log(
    `Working on item #${++count}.  Size: ${queue.size}  Pending: ${
      queue.pending
    }`
  );
});

queue.add(() => Promise.resolve());
queue.add(() => delay(2000));
queue.add(() => Promise.resolve());
queue.add(() => Promise.resolve());
queue.add(() => delay(500));

queue.start();
