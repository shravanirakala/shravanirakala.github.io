
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database, Code, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 px-4 md:px-6 flex items-center bg-hero-pattern">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <p className="text-primary font-medium mb-2">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Shravani Rakala
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6">
                Crafting insights from data, <span className="text-primary"> one pipeline at a time </span>.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                With 10 years of experience in ETL, Python, and database technologies, 
                I specialize in building robust data pipelines and analytics solutions 
                that drive business decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-2 flex justify-center">
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Code className="w-32 h-32 md:w-40 md:h-40 text-primary animate-float" />
                  </div>
                  <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '1s' }}>
                    <Database className="w-14 h-14 text-primary/80" />
                  </div>
                  <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="text-primary/80 text-3xl font-mono">{'{ }'}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
