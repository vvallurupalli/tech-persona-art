import { motion } from "framer-motion";
import { Cpu, Wrench, Sparkles, FolderOpen } from "lucide-react";

const Index = () => {
  return (
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
              className="flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                <Wrench className="w-5 h-5" />
              </div>
              <span>I am an Engineer with a Masters in Computer Science.</span>
            </motion.li>
            
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <span>I love simplicity, Chipotle-style—brilliantly simple, decent choices and exactly what you need.</span>
            </motion.li>
            
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                <FolderOpen className="w-5 h-5" />
              </div>
              <span>Build solutions that actually work. Skip the "just in case" feature bloat.</span>
            </motion.li>
            
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                <Cpu className="w-5 h-5" />
              </div>
              <span>Currently working on some fun stuff with ESP-32</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
