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
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Portfolio
              </h1>
              <h2 className="text-xl text-muted-foreground">Treesa Kuriakose</h2>
            </div>
            
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
          <div className="relative mt-8">
            <div className="glass-card rounded-xl p-2 relative overflow-hidden">
              <div className="flex flex-wrap gap-1 relative">
                {/* Sliding indicator */}
                <div 
                  className="absolute top-2 left-2 h-10 bg-gradient-primary rounded-lg transition-all duration-700 ease-out z-0"
                  style={{
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${tabs.findIndex(tab => tab.id === activeTab) * 100}%)`
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
                        flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-700 ease-out relative z-10
                        ${activeTab === tab.id 
                          ? 'text-primary-foreground' 
                          : 'hover:bg-accent/20 text-foreground'
                        }
                      `}
                      style={{ width: `${100 / tabs.length}%` }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline text-sm font-medium">{tab.label}</span>
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
          <div 
            key={activeTab} 
            className="animate-fade-in transition-all duration-700 ease-out"
            style={{
              transform: 'translateX(0)',
              opacity: 1
            }}
          >
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