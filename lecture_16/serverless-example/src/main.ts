import * as lambda from 'aws-lambda';

export const handler = async (event: any, context: lambda.Context) => {
  console.log('event');
  console.log(event);
  console.log('context');
  console.log(context);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello from lambda ${process.env.SOMEVAR}!`
    }),
    headers: {'Content-Type': 'application/json'}
  }
};
