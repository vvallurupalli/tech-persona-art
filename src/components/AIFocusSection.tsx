import { motion } from "framer-motion";
import { Brain, Database, Sparkles, Shield } from "lucide-react";

const aiHighlights = [
  {
    icon: Sparkles,
    title: "RLHF Experimentation",
    description: "Worked with Anthropic's hh-rlhf dataset, extracting features to predict human acceptance/rejection of AI responses.",
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description: "Built predictive models using Keras/TensorFlow with Artificial Neural Networks across various datasets.",
  },
  {
    icon: Database,
    title: "RAG Architecture",
    description: "Developed a RAG chatbot using OpenAI + Pinecone, with recursive scraping for comprehensive knowledge base.",
  },
  {
    icon: Shield,
    title: "Security Research",
    description: "Trained models for simulating inference attacks, exploring AI security vulnerabilities and defenses.",
  },
];

const AIFocusSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            AI <span className="gradient-text">Focus</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg max-w-2xl mx-auto">
            From exploratory data analysis to production ML systems—my journey in artificial intelligence
          </p>

        <div className="grid md:grid-cols-2 gap-6">
          {aiHighlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card card-hover"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary h-fit">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFocusSection;
