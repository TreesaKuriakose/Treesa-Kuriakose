import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      title: 'BTech in Computer Science and Engineering',
      institution: "St Joseph's College of Engineering and Technology",
      period: '2024 - 2028',
      description: 'Pursuing my third semester in Computer Science and Engineering, with a focus on strengthening core skills in programming, data structures, and algorithms.',
      current: true
    },
    {
      title: '12th (Pre-degree)',
      institution: 'St Thomas Higher Secondary School',
      period: '2022 - 2024',
      description: 'Completed higher secondary education in Computer Science'
    },
    {
      title: '10th (SSLC)',
      institution: 'St Thomas Higher Secondary School',
      period: '2020 - 2022',
      description: 'Completed secondary education'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          My academic journey and achievements
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="glass-card hover-lift p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  {edu.current && (
                    <span className="text-xs bg-gradient-primary text-primary-foreground px-2 py-1 rounded-full w-fit">
                      Current
                    </span>
                  )}
                </div>
                
                <p className="text-primary font-medium">{edu.institution}</p>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;