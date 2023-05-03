const fs = require('fs');
const globbyImport = require('globby');

function addPage(page) {
  const path = page.replace('pages', '').replace(/(.tsx|.ts)/, '').replace('.mdx', '');
  const route = path === '/index' ? '' : path;

  return `  <url>
    <loc>${`${process.env.NEXT_PUBLIC_DOMAIN_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globbyImport([
    'pages/**/*.{ts,tsx,mdx}',
    '!pages/_*.{ts,tsx}',
    '!pages/api',
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
