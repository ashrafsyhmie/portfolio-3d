import { FadeIn } from '../components/FadeIn';
import { ProjectCard, type ProjectData } from '../components/ProjectCard';
import thayyibPreview from '../assets/portfolio/thayyib-preview.gif';
import gdgocPreview from '../assets/portfolio/gdgoc-preview.png';
import sentinelPreview from '../assets/portfolio/sentinel-u-preview.png';

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'Thayyib',
    category: 'Development Lead',
    status: 'Hackathon runner-up',
    description:
      'A halal compliance management system. I served as Development Lead on the project, which earned runner-up in a hackathon.',
    scope: ['Halal compliance', 'Team leadership'],
    images: [thayyibPreview],
    href: 'https://thayyib.vercel.app/',
  },
  {
    number: '02',
    name: 'Sentinel-U',
    category: 'Developer',
    status: 'Status to be confirmed',
    description:
      'A university disaster management and visual control project. Its intended focus is supporting disaster management in a campus setting; implementation details and completed milestones are being documented.',
    scope: ['University disaster management', 'Visual control'],
    images: [sentinelPreview],
  },
  {
    number: '03',
    name: 'GDGoC UNITEN Website',
    category: 'Developer',
    status: 'Website',
    description:
      'A website introducing the Google Developer Groups on Campus community at UNITEN and supporting its membership activities. I contributed as a developer.',
    scope: ['Developer community', 'Membership'],
    images: [gdgocPreview],
    href: 'https://www.gdgocuniten.my/',
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[var(--page-bg)] px-4 pb-32 pt-20 transition-colors duration-300 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-8 md:pb-40 md:pt-32"
    >
      <div className="mx-auto mb-14 flex max-w-[1500px] flex-col gap-5 text-center sm:mb-20 md:mb-24">
        <FadeIn as="p" y={24} className="text-xs font-light uppercase tracking-[0.34em] text-[var(--page-muted)] sm:text-sm">
          Selected work
        </FadeIn>
        <FadeIn as="h2" y={40} className="hero-heading text-[clamp(3.25rem,12vw,150px)] font-black uppercase leading-none tracking-tight">
          Projects
        </FadeIn>
        <FadeIn as="p" delay={0.08} y={24} className="mx-auto max-w-2xl text-[clamp(0.95rem,1.8vw,1.25rem)] font-light leading-relaxed text-[var(--page-muted)]">
          Software for compliance, campus safety, and community. Explore my roles and the purpose behind each project.
        </FadeIn>
      </div>
      <div className="mx-auto max-w-[1600px]">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}
