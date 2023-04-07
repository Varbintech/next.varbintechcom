import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer, { type SendMailOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  pool: true,
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: 'testcupid2@gmail.com',
    pass: 'aCsas1MM_5',
  },
  secure: true,
});

const mailData = (name: string, to: string, message: string): SendMailOptions => {
  return {
    from: 'testcupid2@gmail.com',
    to,
    subject: `Message From ${name}`,
    text: message,
    html: `<div>${message}</div>`,
  };
};

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.warn('req: ', req);
  console.warn('res: ', res);

  transporter.sendMail(mailData('test', 'test', 'test'), (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.warn(info);
    }
  });
}
