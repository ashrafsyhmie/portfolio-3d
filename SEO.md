# Search visibility

The production build generates complete HTML for `/`, `/projects/thayyib`,
`/projects/sentinel-u`, `/projects/gdgoc-uniten`, `/projects/pdfkit`, and
`/projects/hazewatch`, plus a noindex 404 page.
React hydrates these pages for interaction. No server runtime is needed.

Every indexable page has a unique title, description, canonical URL, social
metadata, and JSON-LD. `npm run build` includes assertions for these and the
sitemap. `src/entry-server.tsx` defines routes and metadata; project content is
shared in `src/data/projects.ts`. Add verified case-study details there.

## Google Search Console (account owner)

1. Open https://search.google.com/search-console and add a **Domain** property
   for `ashrafsyhmie.my`.
2. Copy Google's verification TXT record into Cloudflare DNS for the domain.
   Keep existing records. Do not invent or reuse another property's value.
3. Complete verification in Search Console.
4. Submit `https://ashrafsyhmie.my/sitemap.xml`.
5. Inspect the homepage and five project URLs; request indexing where appropriate.
6. Monitor Pages, Performance, and Core Web Vitals. Field metrics require traffic
   and time; a successful deployment is not evidence of indexing or rankings.

Use Google's Rich Results Test for eligible structured data and Schema.org's
validator for the full graph. Person/WebSite markup is descriptive and does
not guarantee a special search appearance.

## Media

`npm run optimize:images` regenerates WebP versions, a Thayyib poster, the favicon,
and the social image from the existing originals. Commit the outputs.
The Thayyib video is a compressed version of the original GIF, generated with:

```sh
ffmpeg -i src/assets/portfolio/thayyib-preview.gif -vf "scale=1280:-2,fps=20" -c:v libx264 -crf 26 -pix_fmt yuv420p -movflags +faststart -an public/media/thayyib-preview.mp4
```

Videos load on demand, not automatically. Use descriptive names for gallery and
multimedia uploads; their filenames become captions. Optimize new media before
uploading. Canonical URLs always use `ashrafsyhmie.my`, including on Vercel aliases.

## Deployment checks

- Homepage and case studies: HTTP 200, visible content in HTML without JavaScript.
- Unknown URLs: HTTP 404; do not add an SPA catch-all rewrite to the homepage.
- Sitemap and robots: HTTP 200 with the expected content types.
- Project navigation, theme switch, video controls, and contact form work after hydration.
- Social preview: `https://ashrafsyhmie.my/images/seo/social-preview.jpg`.
