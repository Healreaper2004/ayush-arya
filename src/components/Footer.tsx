import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="glass-card p-6 inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ayush Arya
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer | Full Stack Developer | AI Enthusiast
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>and lots of</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} Ayush Arya. All rights reserved.
          </div>

          <div className="text-xs text-muted-foreground/70">
            Built with React, TypeScript, Tailwind CSS, and deployed with love ✨
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;