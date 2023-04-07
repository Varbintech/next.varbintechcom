import type { NextApiRequest, NextApiResponse } from 'next';

import Cors from 'cors';

import nodemailer, { type SendMailOptions } from 'nodemailer';

// Gmail
/* const transporter = nodemailer.createTransport({
  // pool: true,
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'testcupid2@gmail.com',
    pass: 'cvhscivclmaajxjd',
  },
  secure: true,
}); */

const transporter = nodemailer.createTransport({
  port: parseInt(String(process.env.SMTP_PORT)),
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  secure: false,
  tls: {
    ciphers: 'SSLv3',
  },
});

const mailData = (
  name: string,
  to: string,
  message: string,
  customTo?: string,
): SendMailOptions => {
  return {
    from: process.env.SMTP_USER,
    to: customTo || process.env.SMTP_USER,
    subject: `A new request on varbintech.com from ${name}`,
    html: `<h2>${message}</h2><h3>${to}</h3>`,
  };
};

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: (...arg: any) => any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  transporter.sendMail(mailData(req.body.name, req.body.to, req.body.message), (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.warn(info);
    }
  });

  res.send('success');
}
