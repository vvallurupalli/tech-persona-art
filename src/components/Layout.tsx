import { Link } from "react-router-dom";
import { Briefcase, Brain, FolderOpen, Mail, Home, Copy, Check } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home, path: "/" },
  { id: "skills", label: "Skills", icon: Briefcase, path: "/skills" },
  { id: "ai", label: "AI Focus", icon: Brain, path: "/ai" },
  { id: "projects", label: "Projects", icon: FolderOpen, path: "/projects" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [copied, setCopied] = useState(false);
  const email = "vvallurupalli@gmail.com";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold">
              Venkat <span className="gradient-text">V</span>
            </h1>
            <p className="text-sm text-muted-foreground">Engineer • Masters in Computer Science • AI Enthusiast</p>
          </Link>
          
          {/* Top Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{email}</span>
            </a>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
              title="Copy email address"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Venkat V. Built with passion for technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
