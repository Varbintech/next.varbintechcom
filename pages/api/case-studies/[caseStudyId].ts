export const config = {
  runtime: 'edge',
};

export default async () => {
  const body = JSON.stringify({
    message: 'Page is not available',
  });

  return new Response(body, {
    status: 404,
  });
};
