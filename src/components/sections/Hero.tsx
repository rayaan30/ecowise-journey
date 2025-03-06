
import { ArrowDown } from "lucide-react";
import ActionButton from "../ui/ActionButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-eco-50"
    >
      <div className="eco-section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-right [animation-delay:300ms]">
            <div className="bg-eco-100 text-eco-800 font-medium rounded-full px-4 py-1 inline-block mb-4">
              Your Carbon Tracking Companion
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Make Every Action 
              <span className="eco-gradient-text block">Count for the Planet</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Track, understand, and reduce your carbon footprint with intuitive 
              tools and personalized insights designed for everyday life.
            </p>
            <div className="flex flex-wrap gap-4">
              <ActionButton size="lg" withArrow>
                Get Started
              </ActionButton>
              <ActionButton size="lg" variant="outline">
                Learn More
              </ActionButton>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in-left [animation-delay:600ms]">
            <div className="relative">
              <div className="w-full h-full absolute bg-eco-500 rounded-full blur-[80px] opacity-20 -z-10"></div>
              <div className="bg-[url('https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=2070')] bg-cover bg-center rounded-3xl aspect-square md:aspect-[4/5] shadow-eco-lg border border-white/50 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-eco animate-fade-in-up [animation-delay:900ms]">
                <div className="text-3xl font-bold eco-gradient-text mb-1">26%</div>
                <div className="text-sm text-gray-600">Carbon Reduction</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#features" className="text-gray-400 hover:text-eco-500 transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
