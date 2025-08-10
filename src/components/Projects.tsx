import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  longDescription: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AgriPred",
      description: "AI-Powered Crop Diagnosis",
      techStack: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
      image: "/projects/project1.png",
      liveUrl: "https://agripred.onrender.com/",
      longDescription: "AI-powered rice leaf disease detection system using deep learning for early crop protection. Utilizes computer vision and machine learning algorithms to identify diseases in rice crops, helping farmers take preventive measures."
    },
    {
      id: 2,
      title: "AutoXperio",
      description: "Smart Garage Management System",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/projects/project2.png",
      liveUrl: "https://autoxperio.onrender.com/",
      longDescription: "Full-stack garage management platform with role-based dashboards, inventory automation, and analytics. Features comprehensive vehicle management, appointment scheduling, and real-time inventory tracking."
    },
    {
      id: 3,
      title: "CloudCast",
      description: "Real-Time Weather Forecast App",
      techStack: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
      image: "/projects/project3.png",
      liveUrl: "https://healreaper2004.github.io/CloudCast/",
      longDescription: "Responsive weather forecasting app with geolocation, AQI, and multi-day forecasts using OpenWeatherMap API. Provides detailed weather information including air quality index and extended forecasts."
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
              <img
                src={project.image}
                alt={project.title}
                className="aspect-video object-cover rounded-t-2xl"
              />
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
                <div className="flex justify-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass hover:bg-primary/20 border-primary/30 px-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank');
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
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
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="aspect-video object-cover rounded-lg"
                />
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
                <div className="flex justify-center pt-4">
                  <Button
                    className="px-8"
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
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
