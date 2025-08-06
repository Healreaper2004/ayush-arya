import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Zap, Palette, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "NumPy/Pandas", level: 85 }
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: <Zap className="h-5 w-5" /> },
    { name: "GitHub", icon: <Code className="h-5 w-5" /> },
    { name: "VS Code", icon: <Code className="h-5 w-5" /> },
    { name: "Postman", icon: <Database className="h-5 w-5" /> },
    { name: "Jupyter", icon: <Brain className="h-5 w-5" /> },
    { name: "Matplotlib", icon: <Palette className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2 bg-muted/50"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Tools & Technologies
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-lg">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="glass-card p-4 text-center group hover:bg-primary/10 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;