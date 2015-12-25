'use strict';

import koa from 'koa';

let app = koa();

// Set X-Response-Time on requests
app.use(function *(next) {
  let start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// Log time of requests
app.use(function *(next) {
  let start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function *() {
  this.body = 'Hello World';
});

let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on port ${server.address().port}`);
});

export default app;
