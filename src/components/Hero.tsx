import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '/lovable-uploads/8ee709c1-403f-4c4f-a07d-b60f3c43224b.png';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Ayush Arya';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center md:justify-end" data-aos="fade-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card animate-float">
                <img
                  src={profileImage}
                  alt="Ayush Arya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-glow"></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center md:text-left" data-aos="fade-left">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h1>
                <div className="space-y-2">
                  <p className="text-xl md:text-2xl text-primary font-semibold">
                    Software Engineer
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Full Stack Developer | AI Enthusiast
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating innovative solutions and building amazing digital experiences 
                with cutting-edge technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                <Button
                  onClick={scrollToContact}
                  className="glass-card hover:bg-primary/20 text-primary border-primary/30 px-6 py-3 group"
                  variant="outline"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="glass-card hover:bg-primary/10 p-3"
                    asChild
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="glass-card hover:bg-primary/10 p-3"
                    asChild
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="glass-card hover:bg-primary/10 p-3"
                    asChild
                  >
                    <a href="mailto:ayush@example.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;