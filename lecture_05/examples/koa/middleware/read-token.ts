import { Next } from 'koa';
import * as Router from 'koa-router';
import { userService } from '../services/users';

interface IUser {
  id: string;
}

declare module 'koa' {
  export interface Context {
    state: {
      user: IUser;
      [key: string]: any;
    };
  }
}

declare module 'koa-router' {
  export interface IRouterContext {
    state: {
      user: IUser;
      [key: string]: any;
    };
  }
}

export async function readToken(ctx: Router.IRouterContext, next: Next) {
  const authHeader = ctx.get('Authorization');

  const [, token] = authHeader.split(' ');

  const user = userService.findByToken(token);

  ctx.state.user = user;

  await next();
}
