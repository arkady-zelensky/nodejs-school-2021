import { Next } from 'koa';
import * as Router from 'koa-router';

class NotAuthorized extends Error {
  status = 401;
}

export function isLoggedIn(ctx: Router.IRouterContext, next: Next) {
  if (ctx.state.user) {
    return next();
  }

  throw new NotAuthorized('user_not_logged_in');
}
