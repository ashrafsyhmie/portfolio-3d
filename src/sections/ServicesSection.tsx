import { FadeIn } from '../components/FadeIn';

const services = [
  {
    number: '01',
    name: 'Frontend Development',
    logos: [{ file: 'react', name: 'React' }, { file: 'nextjs', name: 'Next.js' }],
    caption: 'Interfaces, built component by component',
    tools: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / Modern CSS', 'Responsive UI'],
    description:
      'Building responsive interfaces, reusable components, and clear client-side interactions.',
  },
  {
    number: '02',
    name: 'Backend Development',
    logos: [{ file: 'nodejs', name: 'Node.js' }, { file: 'express', name: 'Express' }],
    caption: 'Request → logic → response',
    tools: ['Node.js', 'Express.js', 'REST APIs', 'Serverless', 'JWT / OAuth Auth', 'Middleware Pipelines'],
    description:
      'Developing APIs, server-side logic, authentication, and application data flows.',
  },
  {
    number: '03',
    name: 'Languages',
    logos: [{ file: 'typescript', name: 'TypeScript' }, { file: 'python', name: 'Python' }],
    caption: 'Different languages. Clear intent.',
    tools: ['TypeScript', 'JavaScript (ES6+)', 'Python', 'C++', 'Java (OOP)', 'SQL'],
    description:
      'Working with typed code, object-oriented programming, and database queries.',
  },
  {
    number: '04',
    name: 'Databases & Cloud',
    logos: [{ file: 'postgresql', name: 'PostgreSQL' }, { file: 'supabase', name: 'Supabase' }],
    caption: 'Structure behind every application',
    tools: ['PostgreSQL', 'Supabase', 'MySQL', 'MongoDB', 'Firebase Firestore'],
    description:
      'Organizing application data with relational databases, document stores, and cloud services.',
  },
  {
    number: '05',
    name: 'AI-Assisted Engineering',
    logos: [{ file: 'githubcopilot', name: 'GitHub Copilot' }],
    caption: 'Human direction. AI-assisted execution.',
    tools: ['Prompt Engineering', 'LLM API Integration', 'Cursor / Copilot', 'Rapid Prototyping', 'Autonomous Agent Specs'],
    description:
      'Using AI-assisted workflows to explore ideas, prototype software, and integrate language models.',
  },
  {
    number: '06',
    name: 'DevOps & Tooling',
    logos: [{ file: 'docker', name: 'Docker' }, { file: 'git', name: 'Git' }],
    caption: 'From local changes to deployment',
    tools: ['Git & GitHub', 'Vercel Deployments', 'Docker Basics', 'Postman', 'Linux / Bash CLI', 'Figma (UI/UX)'],
    description:
      'Supporting development with version control, preview deployments, API testing, and design tools.',
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative rounded-t-[40px] bg-[var(--panel-bg)] px-5 py-20 text-[var(--panel-fg)] transition-colors duration-300 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-6 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[var(--panel-fg)]"
      >
        Skills
      </FadeIn>
      <p className="mx-auto mb-14 max-w-xl text-center text-base leading-relaxed opacity-75 sm:mb-20">
        The tools I use to turn an idea into an interface, connect the data, and bring it to the web.
      </p>

      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={35}
            as="article"
            className="skill-card overflow-hidden rounded-[24px] border border-[var(--panel-border)] bg-[var(--panel-bg)]"
          >
            <div className="skill-visual relative border-b border-[var(--panel-border)] px-6 pb-4 pt-6">
              <div className="flex h-40 items-center justify-center gap-5">
                {service.logos.map((logo) => (
                  <figure key={logo.file} className="flex flex-col items-center gap-3">
                    <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white p-4 shadow-sm sm:h-24 sm:w-24">
                      <img src={`${import.meta.env.BASE_URL}images/skills/${logo.file}.svg`} alt="" width={64} height={64} loading="lazy" className="h-full w-full object-contain" />
                    </div>
                    <figcaption className="text-xs font-medium">{logo.name}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-2 text-center text-xs font-medium">{service.caption}</p>
            </div>

            <div className="p-6 sm:p-7">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                {service.name}
              </h3>
              <p className="mt-3 text-base font-light leading-relaxed opacity-75">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${service.name} tools and skills`}>
                {service.tools.map((tool) => (
                  <li key={tool} className="rounded-md border border-[var(--panel-border)] px-2.5 py-1.5 font-mono text-xs leading-relaxed">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
