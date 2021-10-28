import * as lambda from 'aws-lambda';
import { createConnection } from 'typeorm';

export const handler = async (event: any, context: lambda.Context) => {
  console.log('event');
  console.log(event);
  console.log('context');
  console.log(context);
  let data: unknown = null;
  try {
    const conn = await createConnection({
      type: 'postgres',
      host: 'ec2-176-34-105-15.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'fuutjswpgvholf',
      password: '852588449e59f92555796bb20fec959df2bee68483f371e587870e8a4d44fdab',
      database: 'dfmjttk6mgjhb8',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrationsTableName: 'migrations',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      synchronize: false,
      migrationsRun: false,
      ssl: true,
    });
    data = await conn.query('select * from channels');
    // await conn.close();
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello from lambda ${process.env.SOMEVAR}!`,
      data
    }),
    headers: {'Content-Type': 'application/json'}
  }
};
