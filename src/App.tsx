import { useEffect, useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { ContactSection } from './sections/ContactSection';
import { ProjectShowcaseSection } from './sections/ProjectShowcaseSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { MultimediaSection } from './sections/MultimediaSection';

export function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    const theme = isLightMode ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [isLightMode]);

  return (
    <>
      <main className="min-h-screen overflow-x-clip bg-[var(--page-bg)] transition-colors duration-300">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectShowcaseSection />
        <ProjectsSection />
        <MultimediaSection />
        <ContactSection />
      </main>
      <ThemeToggle
        isLightMode={isLightMode}
        onToggle={() => setIsLightMode((current) => !current)}
      />
    </>
  );
}
