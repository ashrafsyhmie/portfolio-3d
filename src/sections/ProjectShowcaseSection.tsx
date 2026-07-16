import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FadeIn } from '../components/FadeIn';

type ShowcaseProject = {
  title: string;
  label: string;
  image: string;
};

const showcaseProjects: ShowcaseProject[] = [
  {
    title: 'Studio Portrait',
    label: 'Portrait',
    image:
      'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
  },
  {
    title: 'Render Mood',
    label: 'Frame',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    title: 'Color Study',
    label: 'Visual',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    title: 'Digital Set',
    label: 'Scene',
    image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    title: 'Motion Preview',
    label: 'Loop',
    image:
      'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  },
  {
    title: 'Behind The Frame',
    label: 'Process',
    image:
      'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  },
];

function getLoopedPosition(index: number, activeIndex: number, total: number) {
  let position = index - activeIndex;

  if (position > total / 2) position -= total;
  if (position < -total / 2) position += total;

  return position;
}

export function ProjectShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const totalProjects = showcaseProjects.length;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + totalProjects) % totalProjects);
  }, [totalProjects]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % totalProjects);
  }, [totalProjects]);

  useEffect(() => {
    if (reduceMotion || isPaused) return;

    const interval = window.setInterval(showNext, 3200);
    return () => window.clearInterval(interval);
  }, [isPaused, reduceMotion, showNext]);

  return (
    <section
      id="project-showcase"
      className="relative overflow-hidden bg-[var(--page-bg)] px-4 py-24 text-[var(--page-fg)] transition-colors duration-300 sm:px-6 sm:py-28 md:px-8 md:py-36"
      aria-label="Picture reel"
    >
      <div className="mx-auto max-w-[1500px]">
        <FadeIn
          as="header"
          y={40}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-light uppercase tracking-[0.32em] text-[var(--page-muted)] sm:text-sm">
            Personal frames
          </p>
          <h2 className="hero-heading mt-3 flex flex-col text-[clamp(3.25rem,13vw,11rem)] font-black uppercase leading-[0.82] tracking-tight">
            <span>Picture</span>
            <span>Reel</span>
          </h2>
        </FadeIn>

        <FadeIn
          delay={0.08}
          y={32}
          className="mx-auto mt-12 max-w-[980px] sm:mt-14 md:mt-16"
        >
          <div
            className="relative mx-auto h-[min(84vw,440px)] w-full overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(72vw,390px)] w-[min(72vw,390px)] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border border-[var(--button-border)] bg-[var(--button-bg)]"
              aria-hidden="true"
            />

            {showcaseProjects.map((project, index) => {
              const position = getLoopedPosition(index, activeIndex, totalProjects);
              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 1;

              return (
                <motion.article
                  key={project.title}
                  className="absolute left-1/2 top-1/2 h-[min(72vw,390px)] w-[min(72vw,390px)] overflow-hidden rounded-[30px] border border-[var(--button-border)] bg-[var(--card-bg)] shadow-2xl"
                  animate={{
                    x: `calc(-50% + ${position * 64}%)`,
                    y: '-50%',
                    rotate: position * 5,
                    scale: isActive ? 1 : 0.78,
                    opacity: isVisible ? (isActive ? 1 : 0.34) : 0,
                    zIndex: 10 - Math.abs(position),
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: reduceMotion ? 500 : 180,
                    damping: reduceMotion ? 60 : 24,
                    mass: 0.8,
                  }}
                  drag={isActive && !reduceMotion ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.22}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60 || info.velocity.x < -500) showNext();
                    if (info.offset.x > 60 || info.velocity.x > 500) showPrevious();
                  }}
                  aria-hidden={!isActive}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} picture`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/58 to-transparent p-5 text-white sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs font-light uppercase tracking-[0.24em] text-white/65">
                          {project.label}
                        </p>
                        <h3 className="mt-2 text-[clamp(1.35rem,5vw,2.7rem)] font-semibold uppercase leading-none tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.15}
          y={24}
          className="mx-auto mt-10 flex max-w-[430px] items-center justify-between gap-5"
        >
          <button
            type="button"
            onClick={showPrevious}
            className="grid h-12 w-12 place-items-center rounded-full border border-[var(--button-border)] text-[var(--page-fg)] transition duration-200 hover:border-[var(--page-fg)] hover:bg-[var(--page-fg)] hover:text-[var(--page-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--page-fg)]"
            aria-label="Show previous project"
          >
            <ChevronLeft size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" aria-label="Project slides">
            {showcaseProjects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="h-2.5 rounded-full bg-[var(--button-border)] transition-all duration-300 hover:bg-[var(--page-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--page-fg)]"
                style={{ width: activeIndex === index ? '2rem' : '0.625rem' }}
                aria-label={`Show ${project.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={showNext}
            className="grid h-12 w-12 place-items-center rounded-full border border-[var(--button-border)] text-[var(--page-fg)] transition duration-200 hover:border-[var(--page-fg)] hover:bg-[var(--page-fg)] hover:text-[var(--page-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--page-fg)]"
            aria-label="Show next project"
          >
            <ChevronRight size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
