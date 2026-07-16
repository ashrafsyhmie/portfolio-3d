import { FadeIn } from '../components/FadeIn';
import { ProjectCard, type ProjectData } from '../components/ProjectCard';

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'Campus Flow',
    category: 'Student Project',
    year: '2026',
    description:
      'A student-focused dashboard concept for tracking coursework, deadlines, and weekly progress with a calm, responsive interface.',
    scope: ['React', 'TypeScript', 'Dashboard UI'],
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    name: 'Task Forge',
    category: 'Personal Build',
    year: '2026',
    description:
      'A lightweight productivity app concept designed around fast task capture, clear priorities, and a simple system for staying organized.',
    scope: ['State Logic', 'UI System', 'Local Storage'],
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    name: 'Portfolio OS',
    category: 'Case Study',
    year: '2026',
    description:
      'A polished personal-site system that combines project storytelling, visual experiments, and a flexible theme architecture.',
    scope: ['Portfolio Site', 'Motion UI', 'Light Mode'],
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[var(--page-bg)] px-4 pb-32 pt-20 transition-colors duration-300 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-8 md:pb-40 md:pt-32"
    >
      <div className="mx-auto mb-14 flex max-w-[1500px] flex-col gap-5 text-center sm:mb-20 md:mb-24">
        <FadeIn
          as="p"
          y={24}
          className="text-xs font-light uppercase tracking-[0.34em] text-[var(--page-muted)] sm:text-sm"
        >
          Selected work
        </FadeIn>
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading text-[clamp(3.25rem,12vw,150px)] font-black uppercase leading-none tracking-tight"
        >
          Projects
        </FadeIn>
        <FadeIn
          as="p"
          delay={0.08}
          y={24}
          className="mx-auto max-w-2xl text-[clamp(0.95rem,1.8vw,1.25rem)] font-light leading-relaxed text-[var(--page-muted)]"
        >
          A tighter look at Ashraf&apos;s software projects, interface experiments, and the ideas he is building while studying engineering.
        </FadeIn>
      </div>

      <div className="mx-auto max-w-[1600px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
}
