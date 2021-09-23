# Lecture 5

### :house: Home task

0. Create web server using nodejs. This web server should follow REST standards and implement basic CRUD operations for a User entity. This server should also be built with nest.js.

Notes:

- use nest.js
- implement CRUD for a User entity
- should have "create user" endpoint with username as a required parameter
- should have "read user by id" endpoint (only of id and name)
- should have "list users" endpoint (list of ids and names)
- should have "update user by id" endpoint
- do not use any database, store data locally in the memory of the process or in the file-system
- when the user is generated you should generate unique token for that user which can be used later
- protect update user endpoint should be protected by this unique token, use middleware or any internal nest.js mechanism for that
