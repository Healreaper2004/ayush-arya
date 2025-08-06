import { Code, Rocket, Heart, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Innovation",
      description: "Building cutting-edge digital solutions"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Loving what I do every single day"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Enthusiast",
      description: "Exploring the future of technology"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Hello! I'm Ayush Arya
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm a passionate fresher Software Engineer with 0+ years of experience and a deep love for creating innovative 
                  digital solutions. With growing expertise in full-stack development and a keen 
                  interest in artificial intelligence, I strive to build applications that 
                  make a meaningful impact.
                </p>
                <p className="leading-relaxed">
                  My journey in technology began with curiosity and has evolved into a 
                  commitment to excellence. I enjoy tackling complex problems, learning 
                  new technologies, and collaborating with teams to bring ideas to life.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest tech trends, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 text-center group hover:bg-primary/10 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;