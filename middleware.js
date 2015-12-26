export function* xResponseTime(next) {
  let start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
};

export function* logger(next) {
  let start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %sms', this.method, this.url, ms);
};
