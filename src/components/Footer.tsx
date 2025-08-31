import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onTabChange?: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  
  const quickLinks = [
    { name: 'Home', tab: 'about' },
    { name: 'Education', tab: 'education' },
    { name: 'Projects', tab: 'projects' },
    { name: 'Skills', tab: 'skills' },
    { name: 'Experience', tab: 'experience' },
    { name: 'Contact', tab: 'contact' }
  ];

  return (
         <footer className="relative z-50 mt-20 py-12 cosmic-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="text-muted-foreground leading-relaxed">
              A showcase of my professional journey, skills, and achievements.
            </p>
          </div>

                     {/* Quick Links */}
           <div className="space-y-4">
             <h3 className="text-xl font-semibold">Quick Links</h3>
             
                           
             
                                                     <div className="space-y-2">
                {quickLinks.map((link) => (
                  <div key={link.name}>
                    <button 
                      type="button"
                      className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-2 px-3 hover:bg-accent/20 rounded-md transition-all duration-200 cursor-pointer"
                      onClick={() => onTabChange?.(link.tab)}
                      style={{ position: 'relative', zIndex: 1000 }}
                    >
                      {link.name}
                    </button>
                  </div>
                ))}
              </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="glass-card hover-lift"
                onClick={() => window.open('https://github.com/TreesaKuriakose', '_blank')}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="glass-card hover-lift"
                onClick={() => window.open('https://linkedin.com/in/treesa-kuriakose/', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="glass-card hover-lift"
                onClick={() => window.open('mailto:kuriakosetreesa28@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Treesa Kuriakose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;