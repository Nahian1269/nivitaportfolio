import {
  achievements,
  debateAchievements,
  scholarships,
  anchoring,
} from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Mic, Star, Trophy } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function ExtraCurricular() {
  const achievementIcon = (type: string) => {
    if (type.toLowerCase().includes('champion')) {
      return <Trophy className="mr-3 h-5 w-5 text-amber-500" />;
    }
    if (type.toLowerCase().includes('runner up')) {
      return <Award className="mr-3 h-5 w-5 text-slate-400" />;
    }
    if (type.toLowerCase().includes('finalist') || type.toLowerCase().includes('semi finalist')) {
      return <Star className="mr-3 h-5 w-5 text-cyan-500" />;
    }
    return <Award className="mr-3 h-5 w-5 text-primary" />;
  };

  return (
    <SectionWrapper id="achievements" title="Achievements & Highlights">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="font-headline text-2xl font-bold mb-6 text-center lg:text-left">Awards & Recognitions</h3>
          <Accordion type="multiple" className="w-full" defaultValue={['achievements', 'debate', 'scholarships']}>
            <AccordionItem value="achievements">
              <AccordionTrigger className="font-headline text-xl hover:no-underline">Key Achievements</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-2">
                  {achievements.map((ach, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      {achievementIcon(ach.type)} 
                      <div>
                        <span className="font-semibold text-foreground">{ach.title}</span> ({ach.type})
                        <span className="italic ml-1"> - {ach.event}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="debate">
              <AccordionTrigger className="font-headline text-xl hover:no-underline">Debate Accomplishments</AccordionTrigger>
              <AccordionContent>
                 <ul className="space-y-3 pt-2">
                  {debateAchievements.map((ach, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Trophy className="mr-3 h-5 w-5 text-amber-500" /> 
                      <div>
                        <span className="font-semibold text-foreground">{ach.title}</span>
                        <span className="italic ml-1"> - {ach.event}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="scholarships">
              <AccordionTrigger className="font-headline text-xl hover:no-underline">Scholarships</AccordionTrigger>
              <AccordionContent>
                 <ul className="space-y-3 pt-2">
                  {scholarships.map((sch, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <BookOpen className="mr-3 h-5 w-5 text-green-600" />
                      <div>
                        <span className="font-semibold text-foreground">{sch.title}</span>
                         - <span className="italic ml-1">{sch.event}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
            <h3 className="font-headline text-2xl font-bold mb-6 text-center lg:text-left">Anchoring Highlights</h3>
            <div className="space-y-4">
                {anchoring.map((event, index) => (
                <Card key={index} className="bg-secondary/50">
                    <CardHeader className="flex flex-row items-center gap-4 p-4">
                        <Mic className="h-5 w-5 text-primary" />
                        <div>
                            <CardTitle className="font-headline text-lg">{event.event}</CardTitle>
                            {event.role && <CardDescription>{event.role}</CardDescription>}
                        </div>
                    </CardHeader>
                </Card>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
