import { Mail, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
            Interested in collaborating or just want to chat about technology?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:vvallurupalli@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:opacity-90 glow-border group"
            >
              <Mail className="w-5 h-5" />
              vvallurupalli@gmail.com
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          <a
            href="https://github.com/vvallurupalli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/50 font-medium transition-all hover:border-primary/50 hover:bg-secondary group"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
