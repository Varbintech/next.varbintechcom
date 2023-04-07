import type { NextApiRequest, NextApiResponse } from 'next';

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

export default function (req: NextApiRequest, res: NextApiResponse) {
  transporter.sendMail(mailData(req.body.name, req.body.to, req.body.message), (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.warn(info);
    }
  });

  res.send('success');
}
