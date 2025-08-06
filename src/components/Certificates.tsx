import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/images/aws-cert.png",
      verifyUrl: "https://aws.amazon.com/verification"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      image: "/images/gcp-cert.png",
      verifyUrl: "https://cloud.google.com/certification"
    },
    {
      id: 3,
      title: "Meta React Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      image: "/images/meta-cert.png",
      verifyUrl: "https://www.coursera.org/professional-certificates"
    },
    {
      id: 4,
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2022",
      image: "/images/tensorflow-cert.png",
      verifyUrl: "https://www.tensorflow.org/certificate"
    },
    {
      id: 5,
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2023",
      image: "/images/docker-cert.png",
      verifyUrl: "https://docker.com/certification"
    },
    {
      id: 6,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2021",
      image: "/images/freecodecamp-cert.png",
      verifyUrl: "https://freecodecamp.org/certification"
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
              {/* Certificate Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-2xl flex items-center justify-center">
                <div className="text-center">
                  <Award className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                  <div className="text-sm font-medium text-primary/70">
                    {cert.issuer}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-4">
                  <div>{cert.issuer}</div>
                  <div>{cert.date}</div>
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
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Professional Certificates</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Major Platforms</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Verified & Valid</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;