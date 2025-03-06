
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "eco-card group hover:translate-y-[-4px]",
        className
      )}
    >
      <div className="bg-eco-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 text-eco-600 group-hover:bg-eco-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
