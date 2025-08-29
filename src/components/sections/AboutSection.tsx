import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowRight, Code, Briefcase, GraduationCap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const AboutSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="animate-fade-in">
        <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['TypeScript', 'React', 'NextJS', 'Python'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Main Content */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent leading-tight">
                  Daiji Kuriakose
                </h1>
                <p className="text-xl text-muted-foreground font-medium">
                  Student, Full Stack Developer
                </p>
                <p className="text-foreground/80 leading-relaxed max-w-lg">
                  Exploring Full Stack Development | B Tech Computer Science Student at St Joseph's College of Engineering and Technology
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <Button 
                  className="btn-professional bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="rounded-xl border-2 hover:bg-accent/50 transition-all duration-300 hover:scale-105">
                  About Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <Button variant="ghost" size="icon" className="rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 border border-border/50">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 border border-border/50">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl bg-card hover:bg-accent transition-all duration-300 hover:scale-110 border border-border/50">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Right Content - Profile */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105">
                  <img 
                    src={profilePhoto} 
                    alt="Daiji Kuriakose - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Available for projects
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden xl:block">
                  <div className="bg-card/90 dark:bg-card/70 backdrop-blur-sm rounded-lg p-4 border border-border/30 shadow-lg font-mono text-sm max-w-xs">
                    <div className="text-muted-foreground mb-1">// Developer.js</div>
                    <div className="text-primary">const me = new Developer();</div>
                    <div className="text-foreground mt-2">while (true) me.learn();</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Details */}
      <section className="animate-fade-in">
        <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  I'm a passionate full-stack developer and computer science student with a love for creating 
                  innovative web solutions. My journey in technology has led me to explore various frameworks 
                  and technologies, always eager to learn and implement the latest industry practices.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with fellow developers in the community.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-xl p-6 border border-primary/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground/70">Currently learning</span>
                  </div>
                  <p className="font-medium text-foreground">Advanced React Patterns & Cloud Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="animate-fade-in">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl">
                <Code className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Technical Skills</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Proficient in modern web technologies and frameworks
                </p>
                <Button variant="ghost" className="text-blue-500 hover:text-blue-600 p-0 h-auto">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl">
                <Briefcase className="h-6 w-6 text-green-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Work Experience</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Hands-on experience in full-stack development projects
                </p>
                <Button variant="ghost" className="text-green-500 hover:text-green-600 p-0 h-auto">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="bg-card/50 dark:bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl">
                <GraduationCap className="h-6 w-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Education & Certifications</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Computer Science education with industry certifications
                </p>
                <Button variant="ghost" className="text-purple-500 hover:text-purple-600 p-0 h-auto">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;