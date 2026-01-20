import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Brain, FolderOpen, Mail } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AIFocusSection from "@/components/AIFocusSection";
import ContactSection from "@/components/ContactSection";

const tabs = [
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Briefcase },
  { id: "ai", label: "AI Focus", icon: Brain },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "ai":
        return <AIFocusSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header with name */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">
                Venkat <span className="gradient-text">V</span>
              </h1>
              <p className="text-sm text-muted-foreground">Technologist • AI Enthusiast • 20 Years Experience</p>
            </div>
            
            {/* Tab Navigation */}
            <nav className="flex gap-1 overflow-x-auto pb-1 sm:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-lg glow-border"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <tab.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden md:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="min-h-[calc(100vh-120px)]"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>

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
