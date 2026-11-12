import { FadeIn } from '../components/FadeIn';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[var(--page-bg)] px-4 pb-32 pt-20 transition-colors duration-300 sm:-mt-12 sm:rounded-t-[50px] sm:px-6 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-8 md:pb-40 md:pt-32">
      <div className="mx-auto mb-14 flex max-w-[1500px] flex-col gap-5 text-center sm:mb-20 md:mb-24">
        <FadeIn as="h2" y={40} className="hero-heading text-[clamp(3.25rem,12vw,150px)] font-black uppercase leading-none tracking-tight">Projects</FadeIn>
        <FadeIn as="p" delay={0.08} y={24} className="mx-auto max-w-2xl text-[clamp(0.95rem,1.8vw,1.25rem)] font-light leading-relaxed text-[var(--page-muted)]">
          Software for compliance, campus safety, and community. Explore my roles and the purpose behind each project.
        </FadeIn>
      </div>
      <div className="mx-auto max-w-[1600px]">
        {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} totalCards={projects.length} />)}
      </div>
    </section>
  );
}
