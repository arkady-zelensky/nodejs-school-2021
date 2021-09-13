import * as url from 'url'

// const myUrl = new URL('https://github.com/arkady-zelensky/nodejs-school-2021/branches/all?query=lesson_4');
const myUrl = new url.URL('https://github.com/arkady-zelensky/nodejs-school-2021/branches/all?query=lesson_4');

console.log(myUrl);
// Serialized URL
console.log(myUrl.host);

// Host (root domain)
console.log(myUrl.host);

// Host without port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('status', 'stale');
console.log(myUrl.searchParams);

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL.href)
