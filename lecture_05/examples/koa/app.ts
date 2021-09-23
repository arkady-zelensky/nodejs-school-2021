import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as koaQs from 'koa-qs';
import * as cors from '@koa/cors';
import * as koaMorgan from 'koa-morgan';
import * as fs from 'fs';
import * as koaSession from 'koa-session';
import * as uuid from 'uuid';

import { router as versionOneRouter } from './routes/v1';
import { readToken } from './middleware/read-token';

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

const logFileStream = fs.createWriteStream('./logs/access.log', { flags: 'a' });

export const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = { error: error.message };
  }
});

app.keys = [uuid.v4()];

app.use(koaSession({ signed: true }, app));
app.use(readToken);

app.use(koaMorgan('combined', { immediate: true, stream: logFileStream }));
app.use(koaMorgan('short', { stream: logFileStream }));
app.use(cors());

koaQs(app);

app.use(bodyParser({ enableTypes: ['json'] }));

app.proxy = true;

const router = new Router();

router.use('/v1', versionOneRouter.routes());

app.use(router.routes());

app.use((ctx) => {
  ctx.status = 404;
});
