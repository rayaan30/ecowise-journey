
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      withArrow = false,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary: "bg-eco-500 hover:bg-eco-600 text-white",
      secondary: "bg-eco-100 hover:bg-eco-200 text-eco-800",
      outline:
        "bg-transparent border border-eco-500 text-eco-600 hover:bg-eco-50",
      ghost: "bg-transparent hover:bg-eco-50 text-eco-600",
    };

    const sizes = {
      sm: "text-sm py-1.5 px-3",
      md: "text-base py-2 px-5",
      lg: "text-lg py-3 px-8",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-sm hover:shadow",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {withArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";

export default ActionButton;
