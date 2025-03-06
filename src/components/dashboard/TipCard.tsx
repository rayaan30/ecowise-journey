
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface TipCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const TipCard = ({ title, description, icon }: TipCardProps) => {
  return (
    <div className="eco-card hover:translate-y-[-4px] transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="bg-eco-50 rounded-xl p-3 flex items-center justify-center text-eco-600 group-hover:bg-eco-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        
        <button className="h-8 w-8 flex items-center justify-center rounded-full bg-eco-50 text-eco-600 hover:bg-eco-100 transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TipCard;
