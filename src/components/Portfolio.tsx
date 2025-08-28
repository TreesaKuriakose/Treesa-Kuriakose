import React, { useState } from 'react';
import { Moon, Sun, Code, Briefcase, GraduationCap, User, Award, Mail, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CursorBackground from './CursorBackground';
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
    <div className="min-h-screen bg-background cosmic-bg relative">
      <CursorBackground />
      
      {/* Header with enhanced design */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-8 professional-hover">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
                  Treesa Kuriakose
                </h1>
                <div className="relative mb-6">
                  <span className="inline-block btn-professional text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
                    ✨ Available for projects
                  </span>
                </div>
                <div className="font-mono text-sm text-muted-foreground mb-6 glass-card rounded-lg p-4 border border-primary/20 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-primary">const developer = new Developer();</div>
                    <div className="text-primary-glow">await skills.improve();</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5"></div>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Full Stack Developer specializing in modern web technologies with a passion for creating exceptional user experiences
                </p>
              </div>
              
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg glow-primary hover-lift">
                <img 
                  src="/src/assets/profile-photo.jpg" 
                  alt="Treesa Kuriakose - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/30">
              <h2 className="text-xl font-semibold text-muted-foreground">Portfolio</h2>
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

          {/* Enhanced Navigation Tabs with improved animation */}
          <div className="relative">
            <div className="glass-card rounded-xl p-2 professional-hover">
              <div className="flex justify-center gap-1 relative">
                {/* Enhanced sliding background indicator */}
                <div 
                  className="absolute top-2 bottom-2 rounded-lg transition-all duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden"
                  style={{
                    left: `calc(${tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length)}% + 0.25rem)`,
                    width: `calc(${100 / tabs.length}% - 0.125rem)`,
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))',
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant="ghost"
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        relative z-10 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 flex-1 justify-center professional-hover
                        ${activeTab === tab.id 
                          ? 'text-primary-foreground font-medium transform scale-105' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/20 hover:scale-102'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline font-medium">{tab.label}</span>
                      {activeTab === tab.id && (
                        <div className="absolute inset-0 bg-white/10 rounded-lg animate-pulse"></div>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Main Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl p-8 min-h-[600px] animate-fade-in professional-hover">
            <div className="relative">
              {renderContent()}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;