import koaRouter from 'koa-router';

let router = koaRouter();

router.get('/', function *() {
  this.body = 'Hello World';
});

export default router;
