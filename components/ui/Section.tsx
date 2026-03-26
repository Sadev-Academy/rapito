import React from "react";

export function Section({ className = "", children, id, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={`py-20 md:py-28 lg:py-36 ${className}`} {...props}>
      {children}
    </section>
  );
}
