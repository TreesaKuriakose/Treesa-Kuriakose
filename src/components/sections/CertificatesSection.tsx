import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: 'Prompt Engineering',
      issuer: 'Cognitive Class',
      issuedBy: 'IBM SkillsNetwork',
      date: '2025',
      credentialId: '3072ad737fb54df3a4d3d82a6252db8f',
      image: '/api/placeholder/400/300',
      verifyLink: '#'
    },
    {
      title: 'Internship Program',
      issuer: 'The Nexus Project',
      date: '2025',
      period: 'June 1, 2025 to June 30, 2025',
      credentialId: '',
      image: '/api/placeholder/400/300',
      verifyLink: '#'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Professional certifications and achievements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <Card key={index} className="glass-card hover-lift overflow-hidden">
            {/* Certificate Preview */}
            <div className="relative h-48 bg-gradient-secondary p-4 flex items-center justify-center">
              <img
                src={cert.image}
                alt={cert.title}
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  {cert.issuedBy && (
                    <p className="text-sm text-muted-foreground">{cert.issuedBy}</p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>Issued: {cert.date}</span>
              </div>
              
              {cert.period && (
                <p className="text-sm text-muted-foreground">
                  Program Duration: {cert.period}
                </p>
              )}
              
              {cert.credentialId && (
                <div className="text-xs text-muted-foreground">
                  <p>Credential ID: {cert.credentialId}</p>
                </div>
              )}
              
              <Button 
                variant="outline" 
                size="sm" 
                className="glass-card w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;