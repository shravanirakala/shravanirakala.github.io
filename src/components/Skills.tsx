
import React from 'react';
import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', progress: 95 },
        { name: 'SQL', progress: 90 },
        { name: 'Java', progress: 70 },
        { name: 'Scala', progress: 65 }
      ]
    },
    {
      title: 'Data Engineering',
      skills: [
        { name: 'ETL Pipelines', progress: 95 },
        { name: 'Data Modeling', progress: 85 },
        { name: 'Data Warehousing', progress: 90 },
        { name: 'Stream Processing', progress: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Apache Spark', progress: 90 },
        { name: 'Apache Airflow', progress: 85 },
        { name: 'Kafka', progress: 75 },
        { name: 'Docker/Kubernetes', progress: 80 }
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', progress: 90 },
        { name: 'Google Cloud', progress: 80 },
        { name: 'Azure', progress: 75 },
        { name: 'Snowflake', progress: 85 }
      ]
    }
  ];

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="A comprehensive overview of my technical expertise and proficiency levels."
      className="bg-secondary/30"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, catIndex) => (
          <ScrollReveal key={category.title} delay={catIndex * 100}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
