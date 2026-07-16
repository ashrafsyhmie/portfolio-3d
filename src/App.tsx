import { useEffect, useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { AboutSection } from './sections/AboutSection';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { ProjectShowcaseSection } from './sections/ProjectShowcaseSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';

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
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectShowcaseSection />
        <ProjectsSection />
      </main>
      <ThemeToggle
        isLightMode={isLightMode}
        onToggle={() => setIsLightMode((current) => !current)}
      />
    </>
  );
}
