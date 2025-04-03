
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className,
  titleClassName 
}: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 px-4 md:px-6", className)}>
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-3", titleClassName)}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
};

export default Section;
