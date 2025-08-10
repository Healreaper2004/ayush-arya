import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      score: "Score: 904/1000",
      image: "/certificates/certificate1.png",
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/"
    },
    {
      id: 2,
      title: "AI & Data Science Internship",
      issuer: "C-DAC Patna",
      date: "2024",
      score: "Grade: A",
      image: "/certificates/certificate2.jpg",
      verifyUrl: "https://cdac.in/"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card group hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Certificate Image */}
              <div className="aspect-[4/3] rounded-t-2xl overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-4">
                  <div>{cert.issuer}</div>
                  <div>{cert.date}</div>
                  <div className="text-primary font-medium">{cert.score}</div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full glass hover:bg-primary/20 border-primary/30"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Verify Certificate
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6" data-aos="fade-up">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Professional Certificates</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Major Platforms</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">A+</div>
            <div className="text-sm text-muted-foreground">Grade Achievement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
