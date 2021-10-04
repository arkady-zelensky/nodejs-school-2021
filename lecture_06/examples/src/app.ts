import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaMorgan from 'koa-morgan';

export const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status || 500;
    ctx.body = { error: error.message };
  }
});

app.use(koaMorgan('combined', { immediate: true }));
app.use(koaMorgan('short', {}));

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'works';
});

app.use(router.routes());

app.use((ctx) => {
  ctx.status = 404;
});
