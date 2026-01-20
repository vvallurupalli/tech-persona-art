const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground font-medium">technologist at heart</span> with 
            a passion for staying up-to-date with emerging technologies. Over two decades, I've led 
            teams and contributed individually across diverse domains—from API development and Cloud 
            Engineering to DevOps and Contact Center solutions with Avaya and Genesys Cloud.
          </p>

          <p>
            My journey into <span className="text-primary font-medium">Artificial Intelligence</span> has 
            been particularly exciting. From exploratory data analysis with pandas to feature engineering 
            and building predictive models using Keras/TensorFlow, I love the creative ways we can 
            manipulate and learn from data.
          </p>

          <p>
            One of my notable projects involved working with Anthropic's AI-Human conversations 
            (hh-rlhf) dataset—extracting features and building models to predict whether responses 
            would be accepted or rejected by humans. I've also explored inference attack simulations 
            and built RAG-based chatbots using OpenAI and Pinecone vector databases.
          </p>

          <p>
            Beyond tech, I'm deeply committed to <span className="text-foreground font-medium">fighting 
            misinformation</span>. I've built a global web platform with admin capabilities to expand 
            our fake news verification club across regions, powered by contributors, researchers, 
            and verifiers worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
