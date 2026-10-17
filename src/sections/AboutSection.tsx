import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import basketballGlass from '../assets/about/basketball-glass.png';
import gdgGlass from '../assets/about/gdg-glass.png';
import vscodeGlass from '../assets/about/vscode-glass.png';

const aboutText =
  "I'm Ashraf Syahmie, a Software Engineering student at Universiti Tenaga Nasional (UNITEN), Malaysia. My work spans halal compliance management, university disaster management, and developer community websites. I served as Development Lead for Thayyib, a halal compliance management system that earned runner-up in a hackathon, and contributed as a developer to Sentinel-U and the GDGoC UNITEN website. I enjoy turning practical problems into useful digital experiences and learning through hands-on projects. My focus is on growing as a developer while building software with a clear purpose for the people who use it.";

const identityBadges = [
  {
    name: 'GDGOC UNITEN',
    note: 'Developer community',
    image: gdgGlass,
  },
  {
    name: 'VS Code',
    note: 'Daily editor',
    image: vscodeGlass,
  },
  {
    name: 'Basketball',
    note: 'Teamwork & discipline',
    image: basketballGlass,
  },
] as const;

const highlights = [
  {
    label: 'University',
    value: 'UNITEN',
  },
  {
    label: 'Focus',
    value: 'Software engineering',
  },
  {
    label: 'Location',
    value: 'Malaysia',
  },
] as const;

const decorations = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: '',
    className:
      'w-[72px] -rotate-12 -translate-y-3 sm:w-[110px] md:w-[140px]',
    delay: 0.1,
    x: -20,
  },
  {
    src: gdgGlass,
    alt: '',
    className:
      'w-[82px] rotate-6 translate-y-6 sm:w-[130px] md:w-[170px]',
    delay: 0.25,
    x: -10,
  },
  {
    src: vscodeGlass,
    alt: '',
    className:
      'w-[86px] -rotate-6 -translate-y-5 sm:w-[135px] md:w-[180px]',
    delay: 0.15,
    x: 10,
  },
  {
    src: basketballGlass,
    alt: '',
    className:
      'w-[72px] rotate-12 translate-y-5 sm:w-[110px] md:w-[145px]',
    delay: 0.3,
    x: 20,
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--page-bg)] px-5 py-20 transition-colors duration-300 sm:px-8 md:px-10"
    >
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn as="h2" delay={0} y={40} className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </FadeIn>

          <div className="pointer-events-none grid w-full max-w-4xl grid-cols-4 items-center justify-items-center gap-1 py-8 sm:gap-5 sm:py-10" aria-hidden="true">
            {decorations.map((decoration) => (
              <FadeIn key={decoration.src} delay={decoration.delay} duration={0.9} x={decoration.x} y={0} className="flex w-full justify-center">
                <img
                  src={decoration.src}
                  alt={decoration.alt}
                  className={`${decoration.className} aspect-square max-w-full select-none object-contain drop-shadow-sm`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </FadeIn>
            ))}
          </div>

          <AnimatedText
            text={aboutText}
            className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[var(--page-fg)]"
          />

          <FadeIn
            delay={0.16}
            y={28}
            className="grid w-full max-w-4xl gap-3 sm:grid-cols-3"
          >
            {identityBadges.map((badge) => (
              <div
                key={badge.name}
                className="flex items-center gap-4 rounded-3xl border border-[var(--button-border)] bg-[var(--button-bg)] p-4 text-left backdrop-blur"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[var(--button-border)] bg-[var(--card-bg)]">
                  <img
                    src={badge.image}
                    alt=""
                    className="h-11 w-11 object-contain"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--page-fg)]">
                    {badge.name}
                  </h3>
                  <p className="mt-1 text-xs font-light uppercase tracking-[0.14em] text-[var(--page-muted)]">
                    {badge.note}
                  </p>
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn
            delay={0.24}
            y={28}
            className="grid w-full max-w-4xl gap-px overflow-hidden rounded-3xl border border-[var(--button-border)] bg-[var(--button-border)] sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="bg-[var(--page-bg)] px-5 py-5 text-center transition-colors duration-300"
              >
                <p className="text-xs font-light uppercase tracking-[0.24em] text-[var(--page-muted)]">
                  {item.label}
                </p>
                <p className="mt-2 text-[clamp(1rem,2vw,1.35rem)] font-semibold uppercase leading-tight text-[var(--page-fg)]">
                  {item.value}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.2} y={20} className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
