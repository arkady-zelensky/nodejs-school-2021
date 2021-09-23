import { Next } from 'koa';
import * as Router from 'koa-router';
import { isLoggedIn } from '../../middleware/is-logged-in';
import { userService } from '../../services/users';

export const router = new Router();

router.post('/', (ctx: Router.IRouterContext, next: Next) => {
  const user = userService.create();

  ctx.body = {
    user,
  };
});

router.get('/', isLoggedIn, (ctx: Router.IRouterContext, next: Next) => {
  const users = userService.find();

  ctx.body = {
    users,
  };
});

router.get('/:id', isLoggedIn, (ctx: Router.IRouterContext, next: Next) => {
  const { id } = ctx.params;

  const user = userService.findById(id);

  ctx.body = {
    user,
  };
});
