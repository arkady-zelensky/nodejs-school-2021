import * as lambda from 'aws-lambda';

export const handler = async (event: any, context: lambda.Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from lambda!'
    }),
    headers: {'Content-Type': 'application/json'}
  }
};
