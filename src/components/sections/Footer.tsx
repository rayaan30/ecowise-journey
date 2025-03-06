
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-eco-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-eco-400" />
              <span className="font-bold text-2xl">
                Eco<span className="text-eco-400">wise</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Your personal carbon tracking companion, helping you make
              eco-friendly choices every day.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="bg-eco-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-eco-600 transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <img 
                    src={`https://simpleicons.org/icons/${social}.svg`} 
                    alt={social} 
                    className="h-5 w-5 invert" 
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-lg border-b border-eco-700 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Features", "About", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-eco-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg border-b border-eco-700 pb-2">Resources</h4>
              <ul className="space-y-3">
                {["Blog", "Carbon Calculator", "Sustainability Guide", "Community"].map((resource) => (
                  <li key={resource}>
                    <a href="#" className="text-gray-300 hover:text-eco-400 transition-colors">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg border-b border-eco-700 pb-2">Legal</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Data Protection"].map((legal) => (
                  <li key={legal}>
                    <a href="#" className="text-gray-300 hover:text-eco-400 transition-colors">
                      {legal}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-eco-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Ecowise. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-eco-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-eco-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-eco-400 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
