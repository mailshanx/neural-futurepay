import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-lg bg-neural-purple/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-neural-purple" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};