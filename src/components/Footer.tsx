
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Custom-built</span> by John Doe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
