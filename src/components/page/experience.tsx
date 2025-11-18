import { experiences } from '@/lib/data';
import { Briefcase, Users } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function Experience() {
  const experienceIcon = (type: string) => {
    if (type === 'Work') return <Briefcase className="size-6 text-primary-foreground" />;
    return <Users className="size-6 text-primary-foreground" />;
  };

  return (
    <SectionWrapper id="experience" title="Career Journey">
      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              <div className="z-10 absolute left-6 top-1 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-lg">
                {experienceIcon(exp.type)}
              </div>
              <div className="pl-20 w-full">
                <div className="p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                  <p className="font-semibold text-primary mb-3">{exp.organization}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
