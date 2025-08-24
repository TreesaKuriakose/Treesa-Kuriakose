import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categories = ['Frontend', 'Backend', 'Tools & Others', 'Professional'];

  const skills = {
    Frontend: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'Next.js', level: 65 },
      { name: 'Responsive Design', level: 75 }
    ],
    Backend: [
      { name: 'Python', level: 80 },
      { name: 'Django', level: 70 },
      { name: 'Node.js', level: 60 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'API Development', level: 70 }
    ],
    'Tools & Others': [
      { name: 'Git', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 60 },
      { name: 'Linux', level: 55 }
    ],
    Professional: [
      { name: 'Problem Solving', level: 85 },
      { name: 'Team Collaboration', level: 80 },
      { name: 'Communication', level: 75 },
      { name: 'Project Management', level: 70 }
    ]
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Technologies and abilities that drive my development
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Category Sidebar */}
        <div className="lg:col-span-1">
          <Card className="glass-card p-4">
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full justify-start ${
                    activeCategory === category 
                      ? 'bg-gradient-primary text-primary-foreground' 
                      : ''
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Content */}
        <div className="lg:col-span-3">
          <Card className="glass-card p-6">
            <h3 className="text-2xl font-semibold mb-6">{activeCategory} Development</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skill-fill-${index} 1.5s ease-out forwards`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default SkillsSection;