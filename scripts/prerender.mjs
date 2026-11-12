import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname } from 'node:path';
import { pages, render } from '../.prerender/entry-server.js';

const origin = 'https://ashrafsyhmie.my';
const template = await readFile('dist/index.html', 'utf8');
const escape = (text) => text.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
for (const page of [...pages, { path: '/404', title: 'Page not found | Ashraf Syahmie', description: 'This page could not be found.' }]) {
  const { html, structuredData } = render(page.path);
  const canonical = `${origin}${page.path}`;
  const metadata = page.path === '/404' ? '<meta name="robots" content="noindex" />' : `
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Ashraf Syahmie" />
    <meta property="og:locale" content="en_MY" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${origin}/images/seo/social-preview.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Ashraf Syahmie — Software Developer Portfolio" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(page.title)}" />
    <meta name="twitter:description" content="${escape(page.description)}" />
    <meta name="twitter:image" content="${origin}/images/seo/social-preview.jpg" />
    <meta name="twitter:image:alt" content="Ashraf Syahmie — Software Developer Portfolio" />
    <script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`;
  const output = page.path === '/' ? 'dist/index.html' : `dist${page.path}.html`;
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, template
    .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(page.description)}" />`)
    .replace('</head>', `${metadata}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`));
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>${origin}${page.path}</loc></url>`).join('')}</urlset>\n`);
await rm('.prerender', { recursive: true, force: true });
console.log(`Prerendered ${pages.length} indexable pages and a 404 page.`);
