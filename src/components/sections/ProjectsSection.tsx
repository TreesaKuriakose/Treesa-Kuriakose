import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [expandedFeatures, setExpandedFeatures] = useState<{ [key: string]: boolean }>({});
  
  const projects = [
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring advanced animations and smooth navigation',
      image: '/portfolio.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      keyFeatures: [
        'Dynamic Tab Navigation with URL routing',
        'Custom cursor with trail effects',
        'Animated background with floating orbs',
        'Responsive design with glass morphism effects',
        'Contact form with email integration',
        'Smooth scrolling animations throughout',
        'Theme switching capability',
        'Professional wave footer animations'
      ],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 'ml-5 projects',
      title: 'ML-5 Projects',
      description: 'Machine Learning Projects',
      image: '/ml-5-projects.jpg',
      technologies: ['python', 'Django', 'HTML', 'CSS', 'algorithms'],
      keyFeatures: [
        'Air Pollution Prediction – Simple Linear Regression',
        'Heart Disease Risk – Multiple Linear Regression',
        'Blood Sugar Prediction – Polynomial Regression',
        'Loan Approval – Logistic Regression',
        'Cyber Attack Classification – K-Nearest Neighbors (KNN)'
      ],
      links: {
        github: '#',
        live: 'https://ml-five-projects.onrender.com/'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">
            Projects
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Some of my recent work and side projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card overflow-hidden">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
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
              
              {/* Key Features Section */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-card w-full justify-between"
                  onClick={() => setExpandedFeatures(prev => ({
                    ...prev,
                    [project.id]: !prev[project.id]
                  }))}
                >
                  Key Features
                  {expandedFeatures[project.id] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
                
                {expandedFeatures[project.id] && (
                  <div className="pl-4 space-y-2 animate-fade-in">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:opacity-90"
                  onClick={() => window.open(project.links.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="glass-card"
                  onClick={() => window.open(project.links.live, '_blank')}
                >
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