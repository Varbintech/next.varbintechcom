import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async (req: NextRequest) => {
  if (req.method !== 'POST') {
    const body = JSON.stringify({
      message:
        'This API only accepts POST method with an appropriate body: { name: string, to: string, message: string, html: string }',
    });

    return new Response(body, {
      status: 405,
      statusText: `Method ${req.method} Not Allowed`,
      headers: {
        Allow: 'POST',
      },
    });
  }

  try {
    const json = await req.json();

    const data = await fetch(`${process.env.RESEND_API_SEND_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM,
        to: process.env.RESEND_TO,
        subject: '🔥 New request on varbintech.com via contact form',
        html: json.html,
      }),
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      statusText: 'OK',
    });
  } catch (e) {
    return new Response(String(e), {
      status: 400,
    });
  }
};
