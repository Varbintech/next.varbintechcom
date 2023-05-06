const fs = require('fs');
const globby = require('globby');

const FILENAME = 'sitemap.xml';

function addPage(page) {
  const path = page.replace('pages', '').replace(/(.page.tsx|.page.ts)/, '');
  const route = path === '/index' ? '' : path;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
    <priority>1.00</priority>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*.{ts,tsx}',
    '!pages/_*.{ts,tsx}',
    '!pages/**/*-wip.{ts,tsx}',
    '!pages/api',
  ]);
  const fileData = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join('\n')}
</urlset>`;

  fs.writeFile(`public/${FILENAME}`, fileData, err => {
    if (err) {
      throw err;
    }

    console.warn(`> [SEO] ${FILENAME} has been created!`);
  });
}

generateSitemap();
