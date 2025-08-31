import React from 'react';
import { Card } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experience = [
    {
      title: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2025 - Present',
      description: 'Providing comprehensive web development services to clients worldwide. Specializing in modern web technologies and delivering high-quality, scalable solutions.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Next.js', 'Django']
    }
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'C',
    'Node.js', 'C++', 'API', 'MongoDB', 'MySQL', 'Augment Code',
    'VS Code', 'Git', 'GitHub', 'Python', 'HTML', 'CSS',
    'Tailwind CSS', 'Material UI', 'Figma'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">
            Experience
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          My professional journey and career highlights
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <Card key={index} className="glass-card hover-lift p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-xs bg-gradient-primary text-primary-foreground px-2 py-1 rounded-full w-fit">
                    Current
                  </span>
                </div>
                
                <p className="text-primary font-medium">{exp.company}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Technologies & Tools */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">
          Technologies & Tools
        </h3>
        <p className="text-center text-muted-foreground">
          Technologies and tools I've worked with throughout my career
        </p>
        
        <Card className="glass-card p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-lg p-3 text-center text-sm font-medium transition-colors hover-lift"
              >
                {tech}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceSection;