import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const paths = ['/', '/projects/thayyib', '/projects/sentinel-u', '/projects/gdgoc-uniten'];
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const titles = new Set();
for (const path of paths) {
  const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
  assert.match(html, /<h1\b/, `${path}: heading missing without JavaScript`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert(html.includes(`rel="canonical" href="https://ashrafsyhmie.my${path}"`));
  assert(html.includes('property="og:image"'));
  assert(!html.includes('content="noindex"'));
  assert(!html.includes('opacity:0;'), `${path}: content hidden before JavaScript`);
  assert(sitemap.includes(`<loc>https://ashrafsyhmie.my${path}</loc>`));
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert(!titles.has(title), 'Duplicate title');
  titles.add(title);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  assert(schema['@graph'].some((item) => item['@type'] === 'Person'));
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) await access(`dist${decodeURI(match[1])}`);
}
const home = await readFile('dist/index.html', 'utf8');
assert(home.includes('GPA 3.94'));
assert(home.includes('JPA Scholar'));
for (const path of paths.slice(1)) assert(home.includes(`href="${path}"`));
assert((await readFile('dist/404.html', 'utf8')).includes('content="noindex"'));
assert((await readFile('dist/robots.txt', 'utf8')).includes('https://ashrafsyhmie.my/sitemap.xml'));
await access('dist/images/seo/social-preview.jpg');
await access('dist/media/thayyib-preview.mp4');
console.log('SEO checks passed: crawlable content, routes, metadata, schema, sitemap, and local assets.');
