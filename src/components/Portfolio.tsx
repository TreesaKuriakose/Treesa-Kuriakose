import React, { useState } from 'react';
import { Moon, Sun, Code, Briefcase, GraduationCap, User, Award, Mail, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CursorBackground from './CursorBackground';
import ProfessionalBackground from './ProfessionalBackground';
import AboutSection from './sections/AboutSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isDark, setIsDark] = useState(true);

  const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Custom cursor tracking
  React.useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const cursor = document.body;
      if (cursor) {
        cursor.style.setProperty('--mouse-x', `${e.clientX}px`);
        cursor.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'education':
        return <EducationSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'certificates':
        return <CertificatesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ProfessionalBackground />
      <CursorBackground />
      
      {/* Header Row with Portfolio title, Navigation, and Theme Toggle */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-xl p-4 professional-hover">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold gradient-text">
                  Portfolio
                </h1>
                
                {/* Navigation Tabs - Centered */}
                <nav className="flex gap-1 relative justify-center flex-1 max-w-4xl mx-auto">
                  {/* Enhanced sliding background indicator */}
                  <div 
                    className="absolute top-0 bottom-0 rounded-lg transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-lg"
                    style={{
                      left: `calc(${tabs.findIndex(tab => tab.id === activeTab) * 110}px)`,
                      width: `110px`,
                      background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))',
                      boxShadow: '0 0 25px hsl(var(--primary) / 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-pulse"></div>
                  </div>
                  {tabs.map((tab, index) => {
                    const Icon = tab.icon;
                    return (
                      <Button
                        key={tab.id}
                        variant="ghost"
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          relative z-10 flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg 
                          transition-all duration-300 w-[110px] h-[60px] group
                          ${activeTab === tab.id 
                            ? 'text-primary-foreground font-semibold transform scale-105' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/20 hover:scale-102'
                          }
                        `}
                        style={{
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        <Icon className={`w-4 h-4 transition-transform duration-300 ${
                          activeTab === tab.id ? 'scale-110' : 'group-hover:scale-105'
                        }`} />
                        <span className={`text-xs font-medium text-center leading-tight ${
                          activeTab === tab.id ? 'font-semibold' : ''
                        }`}>
                          {tab.label}
                        </span>
                      </Button>
                    );
                  })}
                </nav>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="glass-card hover-lift btn-professional"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[600px] animate-fade-in">
            {renderContent()}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;