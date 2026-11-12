import { projects } from './data/projects';

export function ProjectPage({ project }: { project: (typeof projects)[number] }) {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--page-fg)]">
      <section className="px-6 py-10 sm:px-10 md:py-16">
        <article className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-14 text-sm"><a href="/" className="underline underline-offset-4">Ashraf Syahmie</a><span aria-hidden="true"> / </span><a href="/#projects" className="underline underline-offset-4">Projects</a><span aria-hidden="true"> / </span><span aria-current="page">{project.name}</span></nav>
          <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-black uppercase leading-tight tracking-tight">{project.name}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--page-muted)]">{project.description}</p>
          <dl className="my-10 flex flex-wrap gap-x-16 gap-y-6"><div><dt className="text-sm text-[var(--page-muted)]">My role</dt><dd className="mt-1 text-lg">{project.category}</dd></div><div><dt className="text-sm text-[var(--page-muted)]">Project status</dt><dd className="mt-1 text-lg">{project.status}</dd></div></dl>
          <img src={project.images[0]} alt={`${project.name} application preview`} width={1280} height={565} className="aspect-video w-full rounded-3xl border border-[var(--button-border)] bg-[var(--card-bg)] object-contain" />
          <div className="max-w-3xl space-y-10 py-12 text-lg leading-relaxed">
            <section><h2 className="mb-3 text-3xl font-semibold">Purpose</h2><p>{project.purpose}</p></section>
            <section><h2 className="mb-3 text-3xl font-semibold">My contribution</h2><p>{project.contribution}</p></section>
            <section><h2 className="mb-3 text-3xl font-semibold">Project notes</h2><p className="text-[var(--page-muted)]">{project.context}</p></section>
            {project.video && <video src={project.video} poster={project.images[0]} controls playsInline preload="none" aria-label={`${project.name} demonstration`} className="aspect-video w-full rounded-2xl" />}
            <div className="flex flex-wrap gap-6">{project.href && <a href={project.href} className="underline underline-offset-4">Visit the live project</a>}<a href="/#contact" className="underline underline-offset-4">Discuss my work</a></div>
          </div>
          <nav aria-label="Other projects" className="border-t border-[var(--button-border)] py-8"><h2 className="mb-4 text-2xl font-semibold">More projects</h2><div className="flex flex-wrap gap-6">{projects.filter((item) => item.slug !== project.slug).map((item) => <a key={item.slug} href={`/projects/${item.slug}`} className="underline underline-offset-4">{item.name}</a>)}</div></nav>
        </article>
      </section>
    </main>
  );
}
