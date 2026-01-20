import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Globe, Bot } from "lucide-react";

const projects = [
  {
    title: "ZingerFi",
    description: "Send encrypted data to your known confidees that only they can decrypt using ECC 256 asymmetric encryption. A secure communication platform for sensitive information exchange.",
    icon: Shield,
    website: "https://www.zingerfi.com",
    github: "https://github.com/vvallurupalli/zingerfi-web.git",
    tags: ["Encryption", "ECC 256", "Security", "Privacy"],
  },
  {
    title: "Snitchon",
    description: "A global organization dedicated to curbing fake news. Actively expanding with chapters in Asia, Australia, Uganda, and South Africa. Building a network of contributors, researchers, and verifiers.",
    icon: Globe,
    website: "https://www.snitchon.org",
    github: "https://github.com/vvallurupalli/snitchon-web.git",
    tags: ["Fake News", "Global Impact", "Community", "Verification"],
  },
  {
    title: "BVSD AI",
    description: "An AI chatbot for answering questions about Blue Valley School District. Leverages recursive web scraping to procure answers from thousands of BVSD web pages.",
    icon: Bot,
    website: "https://bvsd.snitchon.org",
    github: "https://github.com/vvallurupalli/bvsd-ai.git",
    tags: ["OpenAI", "Pinecone", "RAG", "LangFlow", "Chatbot"],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Recent work I've built for fun and impact
          </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card card-hover flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <project.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>

              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
