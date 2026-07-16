import { FadeIn } from '../components/FadeIn';

const services = [
  {
    number: '01',
    name: 'Frontend Development',
    description:
      'Building responsive interfaces with React, TypeScript, Tailwind CSS, and careful attention to layout, accessibility, and interaction details.',
  },
  {
    number: '02',
    name: 'Backend Foundations',
    description:
      'Designing practical APIs, data flows, and server-side logic with a focus on clarity, maintainability, and predictable behavior.',
  },
  {
    number: '03',
    name: 'Database Design',
    description:
      'Structuring relational data, writing clean queries, and thinking through how information should move through a product.',
  },
  {
    number: '04',
    name: 'UI Engineering',
    description:
      'Translating visual ideas into polished components, smooth motion, and interfaces that feel good across desktop and mobile.',
  },
  {
    number: '05',
    name: 'Problem Solving',
    description:
      'Breaking down requirements, debugging patiently, and learning quickly through coursework, experiments, and hands-on projects.',
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
        className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight text-[var(--panel-fg)] sm:mb-20 md:mb-28"
      >
        Skills
      </FadeIn>

      <div className="mx-auto max-w-5xl border-t border-[var(--panel-border)]">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={35}
            className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-[var(--panel-border)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
          >
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.8] tracking-tight text-[var(--panel-fg)]">
              {service.number}
            </span>

            <div className="pt-1 sm:pt-2 md:pt-3">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight tracking-tight">
                {service.name}
              </h3>
              <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60 sm:mt-4">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
