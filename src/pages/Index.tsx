import { motion } from "framer-motion";
import { Briefcase, Brain, FolderOpen, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { id: "skills", label: "Skills", icon: Briefcase, path: "/skills" },
  { id: "ai", label: "AI Focus", icon: Brain, path: "/ai" },
  { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">
            Venkat <span className="gradient-text">V</span>
          </h1>
          <p className="text-sm text-muted-foreground">Technologist • AI Enthusiast • 20 Years Experience</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Bullets */}
            <ul className="space-y-6 text-lg md:text-xl text-foreground">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary mt-1">—</span>
                <span>I am an Engineer.</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary mt-1">—</span>
                <span className="flex items-center gap-2">
                  Working on some fun stuff with ESP-32
                  <Cpu className="w-5 h-5 text-primary" />
                </span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <span className="text-primary mt-1">—</span>
                <span>
                  I love simplicity, Chipotle-style—brilliantly simple and exactly what you need. 
                  Build solutions that actually work. Skip the "just in case" feature bloat.
                </span>
              </motion.li>
            </ul>

            {/* Navigation Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4 pt-8"
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-secondary/50 hover:border-primary/50 transition-all"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Venkat V. Built with passion for technology.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
