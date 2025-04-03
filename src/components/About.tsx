
import React from 'react';
import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const personalDetails = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john.doe@example.com' },
    { label: 'Location', value: 'San Francisco, CA' },
    { label: 'Experience', value: '9+ Years' },
    { label: 'Degree', value: 'M.S. Computer Science' },
    { label: 'Availability', value: 'Open to opportunities' },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know my background, experience, and what drives me in the field of data engineering."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <ScrollReveal delay={100}>
          <div className="space-y-6">
            <p className="text-lg">
              I'm a passionate Data Engineer with 9+ years of experience in designing, implementing, 
              and maintaining data pipelines, ETL processes, and database solutions. Throughout my career, 
              I've worked across various industries including finance, healthcare, and e-commerce.
            </p>
            <p className="text-lg">
              My expertise lies in transforming complex business requirements into efficient data 
              architectures that enable organizations to make data-driven decisions. I'm proficient 
              in Python, SQL, and various big data technologies, and I have experience working with 
              cloud platforms like AWS, GCP, and Azure.
            </p>
            <p className="text-lg">
              When I'm not working with data, you can find me contributing to open-source projects, 
              mentoring aspiring data engineers, or exploring new technologies to stay at the 
              forefront of the field.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Personal Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map((detail, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-medium">{detail.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
};

export default About;
