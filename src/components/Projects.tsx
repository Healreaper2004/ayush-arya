import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  longDescription: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AgriPred AI",
      description: "AI-powered crop prediction and farming optimization platform",
      techStack: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
      image: "/images/agripred.png",
      liveUrl: "https://agripred.example.com",
      githubUrl: "https://github.com/ayusharya/agripred",
      longDescription: "A comprehensive agricultural prediction system that uses machine learning to analyze soil conditions, weather patterns, and historical data to provide farmers with optimal crop recommendations and yield predictions."
    },
    {
      id: 2,
      title: "Smart Finance Tracker",
      description: "Personal finance management with AI insights",
      techStack: ["React Native", "Firebase", "Chart.js", "Node.js"],
      image: "/images/finance-tracker.png",
      liveUrl: "https://financetracker.example.com",
      githubUrl: "https://github.com/ayusharya/finance-tracker",
      longDescription: "An intelligent personal finance application that tracks expenses, categorizes spending patterns, and provides AI-driven insights to help users make better financial decisions."
    },
    {
      id: 3,
      title: "EcoTask Manager",
      description: "Sustainable task management with environmental impact tracking",
      techStack: ["Vue.js", "Express.js", "PostgreSQL", "Docker"],
      image: "/images/ecotask.png",
      liveUrl: "https://ecotask.example.com",
      githubUrl: "https://github.com/ayusharya/ecotask",
      longDescription: "A project management tool that helps teams track their environmental impact while managing tasks, promoting sustainable business practices and carbon footprint reduction."
    },
    {
      id: 4,
      title: "Neural Network Visualizer",
      description: "Interactive tool for understanding neural networks",
      techStack: ["JavaScript", "D3.js", "Python", "Flask"],
      image: "/images/neural-viz.png",
      liveUrl: "https://neuralviz.example.com",
      githubUrl: "https://github.com/ayusharya/neural-visualizer",
      longDescription: "An educational platform that visualizes how neural networks learn and make decisions, making complex AI concepts accessible to students and developers."
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card group cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-2xl flex items-center justify-center text-4xl font-bold text-primary/50">
                {project.title.slice(0, 2)}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass hover:bg-primary/20 border-primary/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass hover:bg-secondary/20 border-secondary/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl glass-card border-0">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center text-6xl font-bold text-primary/50">
                  {selectedProject.title.slice(0, 2)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 glass border-secondary/30"
                    onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;