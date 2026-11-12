import { useEffect, useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { ContactSection } from './sections/ContactSection';
import { ProjectShowcaseSection } from './sections/ProjectShowcaseSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { MultimediaSection } from './sections/MultimediaSection';
import { ProjectPage } from './ProjectPage';
import { projects } from './data/projects';

export function App({ path = '/' }: { path?: string }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setIsLightMode(document.documentElement.dataset.theme === 'light');
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!themeLoaded) return;
    const theme = isLightMode ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { window.localStorage.setItem('theme', theme); } catch { /* Storage can be blocked by browser settings. */ }
  }, [isLightMode, themeLoaded]);

  const project = projects.find((item) => path.replace(/\/$/, '') === `/projects/${item.slug}`);

  return (
    <>
      {project ? <ProjectPage project={project} /> : path === '/' ? <main className="min-h-screen overflow-x-clip bg-[var(--page-bg)] transition-colors duration-300">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectShowcaseSection />
        <ProjectsSection />
        <MultimediaSection />
        <ContactSection />
      </main> : <main className="min-h-screen px-6 py-24"><h1 className="text-5xl font-bold">Page not found</h1><a href="/" className="mt-8 inline-block underline">Return to Ashraf’s portfolio</a></main>}
      <ThemeToggle
        isLightMode={isLightMode}
        onToggle={() => setIsLightMode((current) => !current)}
      />
    </>
  );
}
