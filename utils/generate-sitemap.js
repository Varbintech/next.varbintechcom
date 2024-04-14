const fs = require('fs');
const globby = require('globby');

const fetchCaseStudies = async () => {
  const res = await fetch(`${process.env.API_URL}/case-studies`);

  return await res.json();
};

const FILENAME = 'sitemap.xml';

function addCaseStudy(caseStudy) {
  return `<url>
    <loc>${`${process.env.WEBSITE_URL}/case-studies/${caseStudy.attributes.slug}`}</loc>
    <changefreq>hourly</changefreq>
    <priority>1.00</priority>
  </url>`;
}

function addPage(page) {
  const path = page.replace('pages', '').replace(/(.page.tsx|.page.ts)/, '');
  let route = path === '/index' ? '' : path;

  // for pages router that ends with {directory-name}/index.page.tsx
  if (route.endsWith('/index')) {
    route = route.replace('/index', '');
  }

  return `<url>
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
    '!pages/404.page.tsx',
    '!pages/**/*-wip.{ts,tsx}',
    '!pages/api',
  ]);
  const caseStudies = await fetchCaseStudies();

  const fileData = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(item => {
      if (item.includes('[caseStudyId]')) {
        return caseStudies.data.map(addCaseStudy).join('\n');
      }

      return addPage(item);
    })
    .join('\n')}
</urlset>`;

  fs.writeFile(`public/${FILENAME}`, fileData, err => {
    if (err) {
      throw err;
    }

    console.warn(`> [SEO] ${FILENAME} has been created!`);
  });
}

generateSitemap();
