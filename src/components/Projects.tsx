
import React, { useState } from 'react';
import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'Data Lakehouse Architecture',
    description: 'Designed and implemented a modern data lakehouse architecture combining the best elements of data lakes and data warehouses for a financial services company.',
    tags: ['Apache Spark', 'Delta Lake', 'AWS', 'Python'],
    category: 'data-architecture',
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-time Analytics Pipeline',
    description: 'Built a real-time analytics system using streaming technologies to process and analyze e-commerce customer data for personalized recommendations.',
    tags: ['Kafka', 'Spark Streaming', 'Elasticsearch', 'Docker'],
    category: 'streaming',
    github: '#',
    demo: '#'
  },
  {
    title: 'ETL Workflow Orchestration',
    description: 'Developed a robust ETL orchestration system with monitoring and alerting capabilities for a healthcare analytics platform.',
    tags: ['Airflow', 'Python', 'MongoDB', 'GCP'],
    category: 'etl',
    github: '#',
    demo: '#'
  },
  {
    title: 'Data Quality Framework',
    description: 'Created an automated data quality validation framework to ensure data integrity across various data pipelines and sources.',
    tags: ['Python', 'Great Expectations', 'PostgreSQL', 'AWS Lambda'],
    category: 'data-quality',
    github: '#',
    demo: '#'
  },
  {
    title: 'ML Feature Engineering Pipeline',
    description: 'Designed an end-to-end feature engineering pipeline to transform raw data into ML-ready features for predictive modeling.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Feature Store'],
    category: 'machine-learning',
    github: '#',
    demo: '#'
  },
  {
    title: 'Data Mesh Implementation',
    description: 'Led the migration from monolithic data architecture to a domain-oriented data mesh approach for improved scalability and governance.',
    tags: ['AWS', 'Terraform', 'dbt', 'Snowflake'],
    category: 'data-architecture',
    github: '#',
    demo: '#'
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'data-architecture', name: 'Data Architecture' },
  { id: 'streaming', name: 'Streaming' },
  { id: 'etl', name: 'ETL' },
  { id: 'data-quality', name: 'Data Quality' },
  { id: 'machine-learning', name: 'Machine Learning' }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <Section
      id="projects"
      title="Notable Projects"
      subtitle="A showcase of my major data engineering projects and contributions."
    >
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 100}>
            <Card className="h-full project-card">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
