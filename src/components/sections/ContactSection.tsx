import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    // Add the portfolio identifier to the message
    const messageWithIdentifier = `Your Portfolio Website\n\n${formData.message}`;

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', messageWithIdentifier);
    formDataToSend.append('access_key', 'e637dddd-33ef-4c65-b4f1-4535263a1e9e');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        console.log('Error', data);
        setResult(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="gradient-text">
            Contact
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Let's work together on your next project
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm always open to discussing new opportunities and interesting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">treesakuriakose28@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 8075907192</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Kerala, India</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-6">
              <Button variant="outline" size="icon" className="glass-card hover-lift" onClick={() => window.open('https://github.com/TreesaKuriakose', '_blank')}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="glass-card hover-lift" onClick={() => window.open('https://linkedin.com/in/treesa-kuriakose/', '_blank')}>
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="glass-card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="glass-card"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="glass-card"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject (Optional)
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="glass-card"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="glass-card min-h-[120px]"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 glow-primary"
              disabled={isSubmitting}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            
            {result && (
              <div className={`text-center p-3 rounded-lg ${
                result.includes('successfully') 
                  ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
                  : result.includes('Sending') 
                  ? 'bg-blue-500/20 text-blue-600 border border-blue-500/30'
                  : 'bg-red-500/20 text-red-600 border border-red-500/30'
              }`}>
                {result}
              </div>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;