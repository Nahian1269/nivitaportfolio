import { education } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function Education() {
  return (
    <SectionWrapper id="education" title="Educational Background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                 <div className="bg-accent p-3 rounded-full mt-1">
                    <GraduationCap className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <CardTitle className="font-headline text-lg">{edu.institution}</CardTitle>
                  <CardDescription className="text-sm">{edu.degree} in {edu.field}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-muted-foreground">{edu.period}</p>
              <p className="text-sm font-semibold mt-1">{edu.gpa}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
