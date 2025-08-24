import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, ArrowRight, Code2, Users, Award } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute -inset-2 rounded-lg bg-gradient-cosmic opacity-20 blur-2xl"></div>
        <Card className="relative glass-card p-8 md:p-12 hover-lift">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['TypeScript', 'React', 'NextJS', 'Python'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Dario George
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Student, Frontend Developer
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Exploring Full Stack Development | Learning DSA in C++ | 
                  Computer Science Student at St Joseph's College of 
                  Engineering and Technology
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-gradient-primary hover:opacity-90 glow-primary">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="glass-card">
                  About Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
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

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-64 h-64 rounded-full bg-gradient-secondary p-1">
                <img
                    src={profilePhoto}
                    alt="Dario George"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground ml-2">Available for projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Snippet */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-accent/20">
            <code className="text-sm text-primary">
              const developer = new Developer(); <br />
              await skills.improve();
            </code>
          </div>
        </Card>
      </section>

      {/* About Me Details */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        
        <Card className="glass-card p-8 hover-lift">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="leading-relaxed">
              I'm a passionate Computer Science student currently pursuing my degree at St Joseph's College of 
              Engineering and Technology. My journey in technology began with curiosity about how things work 
              behind the scenes, and it has evolved into a deep passion for creating meaningful digital experiences.
            </p>
            <p className="leading-relaxed">
              Currently, I'm focusing on full-stack development with modern technologies like React, TypeScript, 
              and Python. I enjoy solving complex problems and turning ideas into reality through code. 
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or learning about data structures and algorithms.
            </p>
          </div>
        </Card>
      </section>

      {/* Skills Overview */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Skills Overview
          </span>
        </h2>
        <p className="text-center text-muted-foreground">
          A glimpse into my technical expertise and professional capabilities
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <Card className="glass-card p-6 hover-lift">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Technical Skills</h3>
              <p className="text-muted-foreground">
                Expertise in modern web technologies, frameworks, and tools for building robust applications.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>

          {/* Work Experience */}
          <Card className="glass-card p-6 hover-lift">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
              <p className="text-muted-foreground">
                Professional journey across various roles and organizations, showcasing practical expertise.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>

          {/* Education & Certifications */}
          <Card className="glass-card p-6 hover-lift">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Education & Certifications</h3>
              <p className="text-muted-foreground">
                Academic qualifications and professional certifications that form the foundation of my expertise.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;