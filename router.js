import koaRouter from 'koa-router';
import koaBody from 'koa-body';

let bodyParser = koaBody({multipart: true});
let router = koaRouter();

router.post('/receive', bodyParser, function *() {
  let body = this.request.body;

  if (!body.hasOwnProperty('files')) {
    console.error("No attachment found.");
    this.response.body = "Error, no attachment found.";
    this.response.status = 400;
    return;
  }

  let attachments = body.files;
  console.log(attachments);
});

export default router;
