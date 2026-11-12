import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('public/images/seo', { recursive: true });
await Promise.all([
  ...['hero-image', 'gdgoc-preview', 'sentinel-u-preview'].map(async (name) => {
    const width = name === 'hero-image' ? 1040 : 1280;
    await sharp(`src/assets/portfolio/${name}.png`).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`src/assets/portfolio/${name}.webp`);
  }),
  ...['basketball-glass', 'gdg-glass', 'vscode-glass'].map((name) =>
    sharp(`src/assets/about/${name}.png`).resize({ width: 420, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`src/assets/about/${name}.webp`)),
  sharp('src/assets/portfolio/hero-image.png').resize({ width: 520 }).webp({ quality: 80 }).toFile('src/assets/portfolio/hero-image-small.webp'),
  sharp('src/assets/portfolio/thayyib-preview.gif', { page: 0 }).resize({ width: 1280 }).webp({ quality: 82 }).toFile('src/assets/portfolio/thayyib-poster.webp'),
]);

const portrait = await sharp('src/assets/portfolio/hero-image.png').resize({ width: 520, height: 560, fit: 'inside' }).toBuffer();
const title = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><g fill="#d7e2ea" font-family="Arial,sans-serif"><text x="65" y="210" font-size="64" font-weight="700">Ashraf</text><text x="65" y="285" font-size="64" font-weight="700">Syahmie</text><text x="68" y="355" font-size="26">Software Developer Portfolio</text><text x="68" y="405" font-size="23">Projects, community &amp; creative work</text><text x="68" y="550" font-size="26">ashrafsyhmie.my</text></g></svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#0c0c0c' } }).composite([{ input: portrait, left: 660, top: 65 }, { input: title }]).jpeg({ quality: 88 }).toFile('public/images/seo/social-preview.jpg');
await sharp('src/assets/portfolio/hero-image.png').resize(96, 96).png().toFile('public/favicon.png');
console.log('Optimized portfolio images and generated social preview.');
