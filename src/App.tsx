import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const [light, setLight] = useState(false);
  return (
    <div className={`portfolio-shell w-full min-h-screen ${light ? 'light-theme' : 'dark-theme'}`}>
      <button
        type="button"
        className="theme-switch"
        onClick={() => setLight(value => !value)}
        aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}
        title={`Switch to ${light ? 'dark' : 'light'} theme`}
      >
        <span aria-hidden="true">{light ? '☾' : '☼'}</span>
        <span className="theme-switch-label">{light ? 'DARK' : 'LIGHT'}</span>
      </button>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
export default App;
