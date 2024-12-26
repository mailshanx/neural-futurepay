import { motion } from "framer-motion";

interface HowItWorksStepProps {
  number: string;
  title: string;
  description: string;
}

export const HowItWorksStep = ({ number, title, description }: HowItWorksStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 items-start"
    >
      <div className="h-12 w-12 rounded-full bg-neural-purple/10 flex items-center justify-center flex-shrink-0">
        <span className="text-neural-purple font-semibold">{number}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};