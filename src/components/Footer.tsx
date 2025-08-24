import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const quickLinks = [
    'Home',
    'Projects', 
    'Skills',
    'Experience',
    'Contact'
  ];

  return (
    <footer className="relative z-10 mt-20 py-12 cosmic-bg">
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
                <div key={link}>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="glass-card hover-lift">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="glass-card hover-lift">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="glass-card hover-lift">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Dario George. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;