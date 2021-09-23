import * as Router from 'koa-router';

import { router as usersRouter } from './users';

export const router = new Router();

router.use('/users', usersRouter.routes());
