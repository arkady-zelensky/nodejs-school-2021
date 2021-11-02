import * as lambda from 'aws-lambda';
import { createConnection } from 'typeorm';
import { configService } from "./config.service";

export const handler = async (event: any, context: lambda.Context) => {
  let data: unknown = null;
  try {
    const conn = await createConnection(configService.getTypeOrmConfig());
    data = await conn.query('select * from channels');
    await conn.close();
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
