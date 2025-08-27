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
      
      {/* Header with Navigation */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Treesa Kuriakose
            </h1>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="glass-card hover-lift"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Navigation Tabs */}
          <div className="relative">
            <div className="glass-card rounded-xl p-2">
              <div className="flex justify-center gap-1 relative">
                {/* Sliding background indicator */}
                <div 
                  className="absolute top-2 bottom-2 bg-gradient-primary rounded-lg transition-all duration-[0.9s] ease-[cubic-bezier(0.4,0,0.2,1)] glow-primary"
                  style={{
                    left: `${tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length)}%`,
                    width: `${100 / tabs.length}%`,
                    transform: 'translateX(0.25rem)',
                    marginLeft: '0.125rem',
                    marginRight: '0.125rem'
                  }}
                />
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant="ghost"
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        relative z-10 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-[0.9s] flex-1 justify-center
                        ${activeTab === tab.id 
                          ? 'text-primary-foreground font-medium' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/20'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline font-medium">{tab.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in">
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