
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Section from './Section';
import ScrollReveal from './ScrollReveal';

const experienceData = [
  {
    id: 'acme',
    company: 'Acme Technologies',
    title: 'Senior Data Engineer',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Lead a team of 5 data engineers to build and maintain ETL pipelines processing 2TB+ daily data',
      'Architect and implement data warehouse solutions using Snowflake, reducing query times by 70%',
      'Develop automated data quality checks and monitoring systems with Python and Airflow',
      'Collaborate with stakeholders to understand business requirements and translate them into technical specifications',
      'Mentor junior engineers and conduct code reviews to maintain high-quality standards'
    ]
  },
  {
    id: 'dataCorp',
    company: 'DataCorp Inc.',
    title: 'Data Engineer',
    period: 'Mar 2018 - Dec 2020',
    responsibilities: [
      'Designed and built robust ETL processes using Python, Spark, and AWS services',
      'Implemented real-time data processing pipelines using Kafka and Spark Streaming',
      'Created comprehensive data models for analytical and reporting purposes',
      'Optimized database performance, resulting in 40% faster report generation',
      'Worked closely with data scientists to develop ML pipelines and data preprocessing workflows'
    ]
  },
  {
    id: 'techSolutions',
    company: 'Tech Solutions',
    title: 'Database Developer',
    period: 'Jun 2014 - Feb 2018',
    responsibilities: [
      'Developed and maintained complex SQL stored procedures and functions',
      'Designed and implemented ETL processes using SSIS and Python',
      'Created and managed database backup and recovery strategies',
      'Performed database performance tuning and query optimization',
      'Migrated on-premise SQL Server databases to Azure SQL'
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('acme');
  
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="My professional journey in the field of data engineering across various companies."
    >
      <ScrollReveal>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-1/3 lg:w-1/4">
              <TabsList className="flex flex-row sm:flex-col w-full bg-transparent h-auto space-y-0 sm:space-y-1 space-x-1 sm:space-x-0">
                {experienceData.map((exp) => (
                  <TabsTrigger 
                    key={exp.id} 
                    value={exp.id}
                    className="text-left w-full p-3 data-[state=active]:bg-secondary data-[state=active]:shadow-none"
                  >
                    <div className="text-left">
                      <p className="font-medium">{exp.company}</p>
                      {activeTab === exp.id && (
                        <p className="text-sm text-muted-foreground hidden sm:block">{exp.period}</p>
                      )}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="sm:w-2/3 lg:w-3/4">
              {experienceData.map((exp) => (
                <TabsContent key={exp.id} value={exp.id} className="mt-0">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-primary">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </ScrollReveal>
    </Section>
  );
};

export default Experience;
