
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

const Stat = ({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
  duration = 2000,
}: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.min(value, 9999); // Cap at 9999 to prevent excessive DOM updates
    
    // Calculate the increment per frame to complete the count within the duration
    const totalFrames = Math.min(end, 120); // Cap frames for very large numbers
    const incrementPerFrame = end / totalFrames;
    
    let timer = setInterval(() => {
      start += incrementPerFrame;
      setCount(Math.floor(start));
      
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, duration / totalFrames);
    
    return () => {
      clearInterval(timer);
    };
  }, [value, duration]);

  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl font-bold mb-2 eco-gradient-text">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

export default Stat;
