
import React from 'react';
import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const personalDetails = [
    { label: 'Name', value: 'Shravani Rakala' },
    { label: 'Email', value: 'shravani.rakala@gmail.com' },
    { label: 'Location', value: 'Cambridge, UK' },
    { label: 'Experience', value: '10 Years' },
    { label: 'Phone Number', value: '[+44]7770110741' },
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
            Hi, I'm Shravani Rakala, a passionate Data Engineer with 10 years of experience 
            designing and optimizing large-scale data systems. My journey began with mastering 
            Oracle PL/SQL and complex data migrations in the telecom and banking sectors, and has 
            evolved into building robust, cloud-ready data pipelines using modern technologies. 
            </p>
            <p className="text-lg">
            I'm skilled in architecting ETL workflows, automating data pipelines with Apache Airflow, 
            and handling real-time streaming data using Apache Kafka. I’ve also worked with Apache Spark 
            for distributed processing and Cassandra for managing high-volume, low-latency data. My recent
            projects have involved leveraging AWS services (S3, EC2, Lambda) for scalable data solutions, 
            and using Docker for containerization and deployment.
            
            </p>
            <p className="text-lg">
            With a strong foundation in backend development and a growing portfolio of hands-on 
            data engineering projects, I thrive in solving complex data challenges—ensuring clean, 
            reliable, and actionable data for downstream applications.
            </p>

            <p className="text-lg">
            I'm currently seeking Data Engineering roles where I can contribute to building reliable data
            infrastructure, while continuously growing in the fields of big data, cloud engineering,
            and ML/AI-ready pipelines.
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
