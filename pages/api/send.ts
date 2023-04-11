import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async (req: NextRequest) => {
  try {
    const json = await req.json();

    const data = await fetch(`${process.env.RESEND_API_SEND_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'var.bin.com@gmail.com',
        subject: 'Hello world via Resend APIs using Contact form',
        html: `
          <div><strong>Name:</strong> ${json.name}</div>
          <div><strong>To:</strong> ${json.to}</div>
          <div><strong>Message:</strong> ${json.message}</div>
        `,
      }),
    });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (e) {
    return new Response(String(e), {
      status: 400,
    });
  }
};
