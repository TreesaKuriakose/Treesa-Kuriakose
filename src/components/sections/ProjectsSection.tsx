import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring advanced animations and smooth navigation',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: ['Key Features', 'Code', 'Live'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'SaveSphere',
      description: 'secure media storage platform for uploading and accessing photos',
      image: '/api/placeholder/400/250',
      technologies: ['PostgreSQL', 'Django', 'HTML', 'CSS', 'Python'],
      features: ['Key Features', 'Code', 'Live'],
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Some of my recent work and side projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card hover-lift overflow-hidden">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.features.map((feature) => (
                  <Button
                    key={feature}
                    variant="outline"
                    size="sm"
                    className="glass-card"
                  >
                    {feature}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="glass-card">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;