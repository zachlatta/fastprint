'use strict';

import koa from 'koa';
import router from './router.js';
import * as middleware from './middleware.js';

let app = koa();

app.use(middleware.xResponseTime);
app.use(middleware.logger);
app.use(router.routes());

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on port ${server.address().port}`);
});

export default app;
