
import { useRef, useEffect } from "react";
import Stat from "../ui/Stat";
import { Globe, Recycle, TreePine } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".reveal-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("revealed");
              }, 150 * index);
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-eco-50" ref={sectionRef}>
      <div className="eco-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="bg-eco-100 text-eco-800 font-medium rounded-full px-4 py-1 inline-block mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We Created <span className="eco-gradient-text">Ecowise</span>
            </h2>
            <p className="text-gray-600 mb-6">
              At Ecobox, we believe that education and action go hand in hand. Ecowise 
              builds on our commitment to environmental awareness, giving you the tools 
              to make smarter, greener decisions.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is to empower individuals and communities to understand their 
              environmental impact and take meaningful steps toward sustainable living. 
              We envision a world where environmental consciousness is integrated into 
              everyday decisions.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white rounded-full p-3 shadow-eco">
                <Globe className="h-6 w-6 text-eco-500" />
              </div>
              <div>
                <h4 className="font-semibold">Global Perspective, Local Action</h4>
                <p className="text-gray-600 text-sm">Connecting individual choices to worldwide impact</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white rounded-full p-3 shadow-eco">
                <Recycle className="h-6 w-6 text-eco-500" />
              </div>
              <div>
                <h4 className="font-semibold">Sustainable Habits</h4>
                <p className="text-gray-600 text-sm">Building eco-friendly routines that last a lifetime</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3 shadow-eco">
                <TreePine className="h-6 w-6 text-eco-500" />
              </div>
              <div>
                <h4 className="font-semibold">Community Growth</h4>
                <p className="text-gray-600 text-sm">Fostering collective environmental responsibility</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-on-scroll">
            <div className="relative">
              <div className="w-full h-full absolute top-0 bg-eco-500 rounded-full blur-[80px] opacity-20 -z-10"></div>
              <div className="bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2069')] bg-cover bg-center rounded-3xl aspect-square shadow-eco-lg border border-white/50"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 bg-white rounded-2xl p-8 shadow-eco reveal-on-scroll">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Our <span className="eco-gradient-text">Impact</span> So Far
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Join thousands of people already making a difference with Ecowise
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value={15000} label="Active Users" className="reveal-on-scroll" />
            <Stat value={42} suffix="%" label="Average Carbon Reduction" className="reveal-on-scroll" />
            <Stat value={354} suffix="K" label="Kg CO2 Saved" className="reveal-on-scroll" />
            <Stat value={127} label="Community Challenges" className="reveal-on-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
