import { Film } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const files = import.meta.glob<string>(
  '../assets/multimedia/**/*.{png,jpg,jpeg,webp,gif,avif,mp4,webm,PNG,JPG,JPEG,WEBP,GIF,AVIF,MP4,WEBM}',
  { eager: true, query: '?url', import: 'default' },
);

const projects = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({
    src,
    title: path.split('/').pop()!.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' '),
    isVideo: /\.(mp4|webm)$/i.test(path),
  }));

export function MultimediaSection() {
  return (
    <section id="multimedia" aria-labelledby="multimedia-heading" className="bg-[var(--page-bg)] px-5 pb-24 pt-10 text-[var(--page-fg)] sm:px-8 md:px-10 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn as="header" className="mb-12 text-center sm:mb-16">
          <h2 id="multimedia-heading" className="hero-heading text-[clamp(2.25rem,9vw,128px)] font-black uppercase leading-none tracking-tight">Multimedia</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--page-muted)]">A space for my creative work beyond software.</p>
        </FadeIn>

        {projects.length === 0 ? (
          <div className="rounded-[28px] border border-[var(--button-border)] px-6 py-16 text-center">
            <Film size={40} strokeWidth={1.25} aria-hidden="true" className="mx-auto mb-5 text-[var(--page-muted)]" />
            <h3 className="text-2xl font-medium">Creative work, coming soon.</h3>
            <p className="mt-3 text-[var(--page-muted)]">Multimedia projects will be featured here.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.src} className="min-w-0">
                <div className="overflow-hidden rounded-[24px] border border-[var(--button-border)] bg-[var(--card-bg)]">
                  {project.isVideo ? (
                    <video src={project.src} controls playsInline preload="metadata" aria-label={project.title} className="aspect-video w-full object-contain">
                      Your browser does not support this video. <a href={project.src}>Download {project.title}</a>.
                    </video>
                  ) : (
                    <a href={project.src} target="_blank" rel="noreferrer" aria-label={`View ${project.title} full size`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[var(--page-fg)]">
                      <img src={project.src} alt={project.title} loading="lazy" decoding="async" className="aspect-video w-full object-contain" />
                    </a>
                  )}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="break-words text-xl font-medium sm:text-2xl">{project.title}</h3>
                  <span className="shrink-0 pt-1 text-sm text-[var(--page-muted)]">{project.isVideo ? 'Video' : 'Image'}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
