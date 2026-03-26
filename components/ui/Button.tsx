import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-[0.15em] font-medium transition-all duration-500 ease-out focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[var(--color-deep-red)] text-white hover:bg-[#6b1414] hover:shadow-[0_15px_30px_last:rgba(122,26,26,0.3)] shadow-sm",
    secondary: "bg-[var(--color-gold)] text-[var(--color-charcoal)] hover:bg-[#b28f4a] hover:shadow-[0_15px_30px_rgba(197,160,89,0.3)] shadow-sm",
    outline: "border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:shadow-[0_15px_30px_rgba(26,26,26,0.15)]"
  };

  const sizes = {
    sm: "h-10 px-6 text-xs uppercase",
    md: "h-12 px-8 text-sm uppercase",
    lg: "h-14 px-10 text-sm uppercase"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
