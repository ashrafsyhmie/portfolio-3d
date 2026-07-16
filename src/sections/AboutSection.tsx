import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import basketballGlass from '../assets/about/basketball-glass.png';
import gdgGlass from '../assets/about/gdg-glass.png';
import vscodeGlass from '../assets/about/vscode-glass.png';

const aboutText =
  "I'm Ashraf, a software engineering student focused on building clean, reliable, and human-friendly digital products. I enjoy turning ideas into working interfaces, learning through real projects, and improving the small details that make software feel clear and useful.";

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
    label: 'Club',
    value: 'GDGOC UNITEN',
  },
  {
    label: 'Focus',
    value: 'Software engineering',
  },
  {
    label: 'Mode',
    value: 'Learning by building',
  },
] as const;

const decorations = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    alt: '',
    className:
      'absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    src: gdgGlass,
    alt: '',
    className:
      'absolute bottom-[5%] left-[2%] w-[100px] sm:left-[5%] sm:w-[150px] md:left-[8%] md:w-[210px]',
    delay: 0.25,
    x: -80,
  },
  {
    src: vscodeGlass,
    alt: '',
    className:
      'absolute right-[1%] top-[5%] w-[120px] sm:right-[3%] sm:w-[170px] md:right-[6%] md:w-[230px]',
    delay: 0.15,
    x: 80,
  },
  {
    src: basketballGlass,
    alt: '',
    className:
      'absolute bottom-[5%] right-[1%] w-[120px] sm:right-[5%] sm:w-[170px] md:right-[8%] md:w-[230px]',
    delay: 0.3,
    x: 80,
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--page-bg)] px-5 py-20 transition-colors duration-300 sm:px-8 md:px-10"
    >
      {decorations.map((decoration) => (
        <FadeIn
          key={decoration.src}
          delay={decoration.delay}
          duration={0.9}
          x={decoration.x}
          y={0}
          className={`${decoration.className} pointer-events-none z-0`}
        >
          <img
            src={decoration.src}
            alt={decoration.alt}
            className="h-auto w-full select-none object-contain"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn as="h2" delay={0} y={40} className="hero-heading text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </FadeIn>

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
