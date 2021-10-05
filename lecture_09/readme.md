# Lecture 9

1. Install TypeORM into your project, connect it to DB.
2. Define all tables and relations in project as TypeORM entities
3. Rewrite all raw queries with either QueryBuilder or TypeORM repository methods
4. Create Data Access Layer with Repository/DAO pattern (see materials from presentation)
5. Don't expose TypeORM entities out of repositories. Use Domain models and TypeORM entities separately. Come up with some mapping.
6. (Nice to have) Create 3 scripts in package.json

- migration:generate - automatically generates migrations with TypeORM. Example: `$npm run migration:generate NewColumnAdded`
- migration:run - runs all migrations
- migration:revert - reverts last migration

### Useful links:

[TypeORM npm package](https://www.npmjs.com/package/typeorm)

[Connection options](https://typeorm.io/#/connection-options)

[TypeORM entities](https://typeorm.io/#/entities)

[Relations between entities](https://typeorm.io/#/relations)

[Find options (WHERE conditions)](https://typeorm.io/#/find-options)

[Custom repositories (may help you with DAL layer)](https://typeorm.io/#/custom-repository)

[Query builder (a lot of examples here)](https://typeorm.io/#/select-query-builder)

[Migrations](https://typeorm.io/#/migrations)
