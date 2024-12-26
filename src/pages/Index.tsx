import { motion } from "framer-motion";
import { Brain, CreditCard, Lock, Zap, Linkedin } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-neural-dark text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neural-purple/20 via-neural-dark to-neural-dark" />
        <div className="container relative pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="px-3 py-1 text-sm font-medium bg-neural-purple/10 text-neural-purple rounded-full inline-block mb-4">
              Revolutionizing AI Payments
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Seamless Payments for AI Agents
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Enable your AI agents to handle payments securely and efficiently with our cutting-edge payment infrastructure.
            </p>
            <Button
              size="lg"
              className="bg-neural-purple hover:bg-neural-purple/90 text-white rounded-full px-8"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neural-dark/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Neural Payments?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built specifically for AI agents, our platform provides everything you need to handle payments seamlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-First Design"
              description="Purpose-built API endpoints and SDKs designed specifically for AI agent integration."
            />
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Process payments in milliseconds with our optimized infrastructure."
            />
            <FeatureCard
              icon={Lock}
              title="Bank-Grade Security"
              description="Enterprise-level security with end-to-end encryption and compliance."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get up and running with Neural Payments in three simple steps.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-12">
            <HowItWorksStep
              number="01"
              title="Integration"
              description="Integrate our SDK into your AI application with just a few lines of code."
            />
            <HowItWorksStep
              number="02"
              title="Configuration"
              description="Set up your payment preferences and customize the flow to match your needs."
            />
            <HowItWorksStep
              number="03"
              title="Activation"
              description="Go live and let your AI agents handle payments automatically."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neural-purple/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join the future of AI payments today and give your agents the power to handle transactions seamlessly.
            </p>
            <Button
              size="lg"
              className="bg-neural-purple hover:bg-neural-purple/90 text-white rounded-full px-8"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 Neural Payments. All rights reserved.</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;