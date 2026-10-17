import { ContactForm } from '../components/ContactForm';
import { FadeIn } from '../components/FadeIn';

export function ContactSection() {
  return (
    <>
    <section className="relative bg-[var(--panel-bg)] px-5 py-20 text-[var(--panel-fg)] transition-colors duration-300 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <section id="education" aria-labelledby="education-heading" className="scroll-mt-8">
          <FadeIn as="h2" id="education-heading" y={40} className="mb-16 text-center text-[clamp(2.5rem,10vw,140px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
            Education
          </FadeIn>
          <div className="border-t border-[var(--panel-border)]">
            <FadeIn y={35} className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-[var(--panel-border)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <span aria-hidden="true" className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.8] tracking-tight">01</span>
              <div className="min-w-0 pt-1 sm:pt-2 md:pt-3">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight tracking-tight">Bachelor of Software Engineering (Hons.)</h3>
                <p className="mt-3 text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60 sm:mt-4">Universiti Tenaga Nasional (UNITEN) · Malaysia</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.24em] sm:text-sm">2025–2028</p>
                <p className="mt-3 text-base">GPA 3.94 · JPA Scholar</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} y={35} className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-[var(--panel-border)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <span aria-hidden="true" className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.8] tracking-tight">02</span>
              <div className="min-w-0 pt-1 sm:pt-2 md:pt-3">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight tracking-tight">Diploma in Software Engineering (Software Testing)</h3>
                <p className="mt-3 text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60 sm:mt-4">German-Malaysian Institute (GMI)</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.24em] sm:text-sm">2022–2025</p>
                <p className="mt-3 text-base">GPA 3.78 · MARA Sponsorship Recipient</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} y={35} className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-[var(--panel-border)] py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12">
              <span aria-hidden="true" className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.8] tracking-tight">03</span>
              <div className="min-w-0 pt-1 sm:pt-2 md:pt-3">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight tracking-tight">MRSM Johor Bahru</h3>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.24em] sm:text-sm">2017–2021</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </section>
    <section id="contact" className="scroll-mt-8 bg-[var(--page-bg)] px-5 py-20 text-[var(--page-fg)] transition-colors duration-300 sm:px-8 sm:py-24 md:px-10 md:py-32">
        <FadeIn className="mx-auto max-w-5xl">
          <h2 className="text-5xl font-black uppercase tracking-tight sm:text-7xl">Let’s connect</h2>
          <p className="mb-8 mt-5 max-w-xl leading-relaxed">Have a question about my work or a project you’d like to discuss? Get in touch.</p>
          <ContactForm />
          <div className="mt-8 flex flex-wrap gap-6 break-all">
            <a className="underline underline-offset-4" href="mailto:icerafsyahmie12@gmail.com">icerafsyahmie12@gmail.com</a>
            <a className="underline underline-offset-4" href="https://www.linkedin.com/in/ashraf-syahmie-1969a8269/">LinkedIn</a>
            <a className="underline underline-offset-4" href="https://github.com/ashrafsyhmie">GitHub</a>
          </div>
          <p className="mt-12 text-sm">Ashraf Syahmie Bin Ahmad Shahir · Malaysia</p>
        </FadeIn>
    </section>
    </>
  );
}
