// Generate v4 UUIDs without needing the uuid library
// import * as crypto from 'crypto';
//
// const itemId = crypto.randomUUID();
//
// console.log(itemId);




// New promise-based APIs in Node.js
// import { setTimeout } from 'timers/promises';
//
// (async () => {
//   const delayedValue = await setTimeout(1000, '1 minute later');
//
//   console.log(delayedValue);
// })();



// Cancel async operations with AbortController
import fetch from "node-fetch";
import { setTimeout } from 'node:timers/promises';

const cancelTimeout = new AbortController();
const cancelRequest = new AbortController();

async function timeout(milliseconds) {
  try {
    await setTimeout(milliseconds, undefined, { signal: cancelTimeout.signal });
    cancelRequest.abort();
  } catch (error) {
    // Ignore rejections
  }
}

async function makeRequest() {
  try {
    const response = await fetch('https://httpstat.us/200?sleep=5000', {
      signal: cancelRequest.signal,
    });
    console.log('Got response');
    return true;
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Request was aborted');
    } else {
      console.error(error);
    }
  } finally {
    cancelTimeout.abort();
  }
}

(async () => {
  const result = await Promise.race([timeout(10000), makeRequest()]);
  console.log({ result });
})();





