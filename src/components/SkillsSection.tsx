import { motion } from "framer-motion";

const skills = {
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
  "AI & Machine Learning": ["TensorFlow", "Keras", "Pandas", "Scikit-learn", "OpenAI API", "LangChain"],
  "Development": ["Java", "Python", "JavaScript", "TypeScript", "React", "Node.js", "REST APIs", "GraphQL"],
  "Contact Center": ["Avaya", "Genesys Cloud", "IVR Systems", "CTI"],
  "Databases & Tools": ["PostgreSQL", "SQL Server", "Oracle", "MongoDB", "Pinecone", "Redis", "Git"],
};

const SkillsSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card card-hover"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
