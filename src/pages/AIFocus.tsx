import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AIFocusSection from "@/components/AIFocusSection";

const AIFocus = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">
              Venkat <span className="gradient-text">V</span>
            </h1>
            <p className="text-sm text-muted-foreground">AI Focus</p>
          </div>
        </div>
      </header>
      <AIFocusSection />
    </main>
  );
};

export default AIFocus;
