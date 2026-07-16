import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';
import { LiveProjectButton } from './LiveProjectButton';

export interface ProjectData {
  number: string;
  name: string;
  category: string;
  year: string;
  description: string;
  scope: string[];
  images: [string, string, string];
  href?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

export function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0.15, 1], [1, targetScale]);
  const style = {
    '--card-offset': `${index * 28}px`,
  } as CSSProperties;

  return (
    <div ref={containerRef} className="relative py-5 md:h-[92vh] md:min-h-[760px] md:py-0">
      <motion.article
        className="project-card-sticky relative overflow-hidden rounded-[28px] border border-[var(--button-border)] bg-[var(--card-bg)] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.22)] transition-colors duration-300 sm:rounded-[34px] sm:p-5 md:sticky md:rounded-[42px] md:p-7"
        style={{ ...style, scale }}
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          <div className="flex min-h-[360px] flex-col justify-between rounded-[24px] border border-[var(--button-border)] bg-[var(--button-bg)] p-5 backdrop-blur sm:min-h-[420px] sm:rounded-[30px] sm:p-7 md:p-8 lg:min-h-[620px]">
            <div className="flex items-start justify-between gap-5">
              <span className="text-[clamp(3.5rem,9vw,7.5rem)] font-black uppercase leading-[0.76] tracking-tight text-[var(--page-fg)]">
                {project.number}
              </span>
              <div className="rounded-full border border-[var(--button-border)] px-4 py-2 text-xs font-light uppercase tracking-[0.22em] text-[var(--page-muted)]">
                {project.year}
              </div>
            </div>

            <div>
              <p className="text-xs font-light uppercase tracking-[0.3em] text-[var(--page-muted)] sm:text-sm">
                {project.category}
              </p>
              <h3 className="mt-4 max-w-2xl text-[clamp(2.4rem,6vw,5.8rem)] font-black uppercase leading-[0.86] tracking-tight text-[var(--page-fg)]">
                {project.name}
              </h3>
              <p className="mt-5 max-w-xl text-[clamp(0.95rem,1.5vw,1.15rem)] font-light leading-relaxed text-[var(--page-muted)]">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-5">
              <ul className="flex flex-wrap gap-2" aria-label={`${project.name} scope`}>
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[var(--button-border)] px-3 py-1.5 text-[0.68rem] font-light uppercase tracking-[0.18em] text-[var(--page-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <LiveProjectButton href={project.href} />
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4">
            <div className="group relative overflow-hidden rounded-[26px] border border-[var(--button-border)] bg-[var(--button-bg)] sm:rounded-[34px]">
              <img
                src={project.images[2]}
                alt={`${project.name} main presentation`}
                className="h-[clamp(280px,42vw,560px)] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white sm:p-7">
                <p className="text-xs font-light uppercase tracking-[0.26em] text-white/70">
                  Featured frame
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {project.images.slice(0, 2).map((image, imageIndex) => (
                <div
                  key={image}
                  className="group overflow-hidden rounded-[22px] border border-[var(--button-border)] bg-[var(--button-bg)] sm:rounded-[30px]"
                >
                  <img
                    src={image}
                    alt={`${project.name} detail view ${imageIndex + 1}`}
                    className="h-[clamp(130px,15vw,220px)] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
