'use strict';

import koa from 'koa';
import koaRouter from 'koa-router';
import * as middleware from './middleware.js';

let app = koa();
let router = koaRouter();

app.use(middleware.xResponseTime);
app.use(middleware.logger);

router.get('/', function *() {
  this.body = 'Hello World';
});

app.use(router.routes());

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on port ${server.address().port}`);
});

export default app;
