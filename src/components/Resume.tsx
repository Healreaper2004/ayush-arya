import { Button } from '@/components/ui/button';
import { Download, Eye, FileText } from 'lucide-react';

const Resume = () => {
  const resumeUrl = "https://docs.google.com/document/d/1example-resume-id/preview";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1example-resume-id";

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
            Download my resume or view it online
          </p>
        </div>

        <div className="space-y-8">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
            <Button
              className="glass-card hover:bg-primary/20 border-primary/30 px-6 py-3"
              variant="outline"
              onClick={() => window.open(downloadUrl, '_blank')}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
            <Button
              className="glass-card hover:bg-secondary/20 border-secondary/30 px-6 py-3"
              variant="outline"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Eye className="h-5 w-5 mr-2" />
              View Online
            </Button>
          </div>

          {/* Resume Preview */}
          <div className="glass-card p-6" data-aos="fade-up" data-aos-delay="200">
            <div className="aspect-[8.5/11] bg-background rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl text-muted-foreground">
                  <FileText className="h-20 w-20 mx-auto" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Resume Preview
                  </h3>
                  <p className="text-muted-foreground">
                    Click the buttons above to view or download my complete resume
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;