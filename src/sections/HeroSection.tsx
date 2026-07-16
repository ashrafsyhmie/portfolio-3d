import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import heroImage from '../assets/portfolio/hero-image.png';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: 'mailto:hello@ashraf.dev' },
] as const;

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[var(--page-bg)] transition-colors duration-300">
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20 px-6 pt-6 md:px-10 md:pt-8">
        <ul className="flex items-center justify-between">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium uppercase tracking-wider text-[var(--page-fg)] transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none md:text-lg lg:text-[1.4rem]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="relative z-0 mt-6 overflow-hidden sm:mt-4 md:-mt-5">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-marquee w-full overflow-hidden text-[20vw] font-black uppercase leading-none tracking-tight sm:text-[18vw] md:text-[16vw] lg:text-[15vw]"
        >
          <span className="hero-marquee-track">
            <span className="hero-marquee-group">
              <span className="hero-marquee-item">Hi, i&apos;m Ashraf</span>
              <span className="hero-marquee-item" aria-hidden="true">
                Software Engineering Student
              </span>
            </span>
            <span className="hero-marquee-group" aria-hidden="true">
              <span className="hero-marquee-item">Hi, i&apos;m Ashraf</span>
              <span className="hero-marquee-item">
                Software Engineering Student
              </span>
            </span>
          </span>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <img
              src={heroImage}
              alt="Ashraf, software engineering student"
              className="aspect-[4/5] h-auto w-full select-none object-contain"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-6 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[var(--page-fg)] sm:max-w-[220px] md:max-w-[260px]">
            a software engineering student building thoughtful, useful digital products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
