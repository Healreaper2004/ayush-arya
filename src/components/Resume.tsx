import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  // Updated file path without spaces or extra folder
  const resumeUrl = "/Ayush_Arya_Resume.pdf"; // view in browser
  const downloadUrl = "/Ayush_Arya_Resume.pdf"; // same file for download

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
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
          <div
            className="glass-card p-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <iframe
              src={resumeUrl}
              className="w-full aspect-[8.5/11] rounded-lg border"
              title="Resume Preview"
            ></iframe>
          </div>

          {/* Quick Info */}
          <div
            className="grid md:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">0+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                Technologies Mastered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
