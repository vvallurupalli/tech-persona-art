const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          The Perpetual Tech Student{" "}
          <span className="gradient-text">(Who Also Happens to Have 20+ Years of Experience)</span>
        </h2>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm that person who treats "emerging technologies" like some people treat Netflix releases—gotta 
            stay current, gotta know what's next. Over two decades, I've bounced between leading teams and 
            rolling up my sleeves to code alongside them, touching everything from{" "}
            <span className="text-foreground font-medium">Java UI/API wizardry and backend sorcery</span> to 
            Cloud Engineering, DevOps pipelines, and taming contact centers with Avaya and Genesys Cloud. 
            Recently, I even added .NET to the mix because apparently, I can't help myself.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              When AI Became My New <span className="gradient-text">Obsession</span>
            </h3>
            <p className="mb-4">
              Then Artificial Intelligence happened, and let's just say it clicked. Hard. I went from casually 
              exploring data with pandas (as one does) to full-on feature engineering and building predictive 
              models with Keras and TensorFlow. There's something delightfully nerdy about coaxing insights 
              out of data—it's like solving puzzles, except the puzzles fight back.
            </p>
            <p>
              Case in point: I dove into Anthropic's AI-Human conversation dataset (hh-rlhf, for the acronym 
              enthusiasts) and built models to predict which responses humans would accept or reject. Spoiler 
              alert: teaching machines to understand human preferences is both fascinating and slightly 
              existential. I've also dabbled in{" "}
              <span className="text-foreground font-medium">inference attack simulations</span>—because why 
              not explore the cybersecurity dark arts?—and created RAG-based chatbots using OpenAI and Pinecone 
              vector databases that actually remember what you told them three messages ago.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              The Truth <span className="gradient-text">Crusader</span>
            </h3>
            <p>
              But here's where my "why" lives: I really hate misinformation. So much so that I built a global 
              platform to combat fake news, complete with admin superpowers and a worldwide network of 
              contributors, researchers, and verifiers. Because if we're building powerful tech, we might as 
              well use it to keep the truth... well, true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
