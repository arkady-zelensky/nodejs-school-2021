# Lecture 9

1. create functionality for user that provide ability to upload videos via HTTP.
   Videos should be stored in static folder.
   Name of video file should have next format: {random-uuid}-{timestamp}.{extention}.

2. create functionality for receiving video via HTTP endpoint.
   Important: you shouldn't expose video file URL to client. Client must receive video as stream on response.

3. videos must be encrypted before saving them on server. When user downloads videos they must be decrypted.

### Useful links:

[Node.js stream](https://nodejs.org/api/stream.html)

[Stream backpressure](https://nodejs.org/en/docs/guides/backpressuring-in-streams/)

[Stream examples](https://nodejs.dev/learn/nodejs-streams)

[Child processes](https://nodejs.org/api/child_process.html)

[Worker threads](https://nodejs.org/api/worker_threads.html)
