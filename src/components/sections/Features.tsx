
import { useEffect, useRef } from "react";
import { 
  Activity, 
  BarChart4, 
  Users, 
  Lightbulb, 
  Globe 
} from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const Features = () => {
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

  const features = [
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-Time Carbon Tracking",
      description:
        "Monitor the carbon impact of your daily choices, from energy usage to food consumption, all in real-time.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Custom Action Plans",
      description:
        "Receive personalized recommendations to reduce your footprint in ways that align with your lifestyle.",
    },
    {
      icon: <BarChart4 className="h-6 w-6" />,
      title: "Eco-Impact Insights",
      description:
        "See how small changes in your daily habits contribute to global environmental goals and sustainability targets.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Challenges",
      description:
        "Join eco-friendly challenges with friends, family, and schools to inspire collective action and shared learning.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white" ref={sectionRef}>
      <div className="eco-section">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="bg-eco-100 text-eco-800 font-medium rounded-full px-4 py-1 inline-block mb-4 reveal-on-scroll">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
            How Ecowise <span className="eco-gradient-text">Empowers You</span>
          </h2>
          <p className="text-gray-600 reveal-on-scroll">
            Our intuitive tools make it easy to understand and reduce your
            environmental impact through everyday actions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="reveal-on-scroll">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-on-scroll">
              <div className="relative">
                <div className="w-full h-full absolute top-0 bg-eco-500 rounded-full blur-[80px] opacity-20 -z-10"></div>
                <div className="bg-[url('https://images.unsplash.com/photo-1569163139599-0f4757b7e71c?q=80&w=2070')] bg-cover bg-center rounded-3xl aspect-square shadow-eco-lg border border-white/50"></div>
              </div>
            </div>
            <div className="reveal-on-scroll">
              <div className="bg-eco-100 text-eco-800 font-medium rounded-full px-4 py-1 inline-block mb-4">
                Integration with Ecobox Programs
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Link to your community's <span className="eco-gradient-text">environmental initiatives</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Connect your Ecowise account to Ecobox activities and track your progress 
                within your community. Participate in local sustainability projects, measure 
                your contribution, and celebrate collective achievements.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Track your participation in local cleanup events",
                  "Measure your contribution to community gardens",
                  "Join school and neighborhood eco-challenges",
                  "Connect with like-minded individuals near you"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-eco-500 rounded-full p-1 mt-1 mr-3">
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M20 6L9 17L4 12" 
                          stroke="white" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
