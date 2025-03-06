
import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-eco-500" />
          <span className="font-bold text-2xl">
            Eco<span className="text-eco-500">wise</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-eco-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button
            className="bg-eco-500 hover:bg-eco-600 text-white rounded-full px-6"
          >
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-800 transition-transform duration-300",
              isMobileMenuOpen && "transform rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-800 transition-opacity duration-300",
              isMobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-6 h-0.5 bg-gray-800 transition-transform duration-300",
              isMobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden px-4 py-4",
          isMobileMenuOpen ? "max-h-60 border-b border-gray-100" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-eco-600 font-medium transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button
            className="bg-eco-500 hover:bg-eco-600 text-white rounded-full"
          >
            Download App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
