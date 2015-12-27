import koaRouter from 'koa-router';
import koaBody from 'koa-body';
import * as config from './config.js';
import { printFile } from './printer.js';

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

  for (let attachmentName in body.files) {
    let attachment = body.files[attachmentName];

    printFile(attachment.path, config.PRINTER_NAME)
      .then(jobID => {
        let msg = `Printed ${attachment.name} with job id ${jobID}`;
        this.response.body = msg;
        console.log(msg);
      })
      .catch(err => {
        this.response.status = 500;
        this.response.body = err.toString();
        console.error(err);
      });
  }
});

export default router;
