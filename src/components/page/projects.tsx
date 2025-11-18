import { projects } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Signature Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col hover:border-primary transition-colors duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-accent p-3 rounded-full">
                  <Lightbulb className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              </div>
              <CardDescription>{project.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
