
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider = ({ className }: SectionDividerProps) => {
  return (
    <div className={cn("w-full flex justify-center", className)}>
      <div className="h-px w-16 md:w-24 bg-border" />
    </div>
  );
};

export default SectionDivider;
