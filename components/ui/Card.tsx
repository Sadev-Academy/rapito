import React from "react";

export function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2px] border border-[rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${className}`} {...props}>
      {children}
    </div>
  );
}
