import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { ArrowRight, BookOpen, MessageCircle, Sparkles, Zap, Target, Brain } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Context-Aware",
    description: "Answers tied to your exact lesson content, not generic responses.",
  },
  {
    icon: MessageCircle,
    title: "Instant Answers",
    description: "Ask questions right where you're learning. No context switching.",
  },
  {
    icon: Brain,
    title: "Smart Highlighting",
    description: "Select any text to instantly get explanations on that specific concept.",
  },
  {
    icon: Zap,
    title: "Always Available",
    description: "Your personal tutor that never sleeps and is always patient.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Powered Learning Assistant
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Never let a{" "}
            <span className="text-highlight">doubt</span>
            <br />
            slow your learning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Ask questions instantly while studying. Get context-aware answers
            that are tied to your exact lesson — not generic responses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-amber text-primary font-semibold hover:opacity-90 transition-opacity"
            >
              <BookOpen className="w-5 h-5" />
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              See How It Works
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learning, reimagined
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A chatbot that understands what you're studying and gives you relevant answers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover-lift group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border overflow-hidden bg-card"
          >
            <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-secondary/50">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 text-xs text-muted-foreground">lesson — photosynthesis</span>
            </div>
            <div className="p-8 flex gap-6">
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Light-Dependent Reactions
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  The light-dependent reactions occur in the <span className="bg-accent/15 px-1 rounded">thylakoid membranes</span> of the chloroplasts. When chlorophyll absorbs photons of light...
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  During this process, water molecules are split (photolysis), releasing oxygen gas.
                </p>
              </div>
              <div className="w-64 rounded-xl border border-border bg-background p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-foreground">AI Assistant</span>
                </div>
                <div className="chatbot-bubble-bot text-xs">
                  What are thylakoid membranes?
                </div>
                <div className="chatbot-bubble-user text-xs">
                  They're the internal membrane system of chloroplasts where light reactions happen! 🌱
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl gradient-amber"
          >
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Ready to learn smarter?
            </h2>
            <p className="text-primary/80 mb-6">
              Pick a course and start asking questions instantly.
            </p>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-display font-semibold text-foreground">DoubtFlow</span>
          <span>Context-aware learning assistant</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
