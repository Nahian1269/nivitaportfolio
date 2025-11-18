import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  profile,
  technicalSkills,
  softSkills,
  education,
  experiences,
  projects,
  anchoring,
  achievements,
  debateAchievements,
  scholarships,
} from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Lightbulb,
  Mic,
  Trophy,
  Star,
  BookOpen,
} from 'lucide-react';

export default function Home() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  const experienceIcon = (type: string) => {
    if (type === 'Work') return <Briefcase className="size-5 text-primary-foreground" />;
    return <Users className="size-5 text-primary-foreground" />;
  };

  const achievementIcon = (type: string) => {
    if (type.toLowerCase().includes('champion')) {
      return <Trophy className="mr-2 h-4 w-4 text-amber-500" />;
    }
    if (type.toLowerCase().includes('runner up')) {
      return <Award className="mr-2 h-4 w-4 text-slate-400" />;
    }
    if (type.toLowerCase().includes('finalist') || type.toLowerCase().includes('semi finalist')) {
      return <Star className="mr-2 h-4 w-4 text-cyan-500" />;
    }
    return <Award className="mr-2 h-4 w-4 text-primary-foreground" />;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="font-headline text-2xl font-bold text-foreground">
            Nivita
          </a>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <a href="#about" className="transition-colors hover:text-primary-foreground">About</a>
            <a href="#experience" className="transition-colors hover:text-primary-foreground">Experience</a>
            <a href="#projects" className="transition-colors hover:text-primary-foreground">Projects</a>
            <a href="#achievements" className="transition-colors hover:text-primary-foreground">Achievements</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <section id="hero" className="mb-16">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="relative h-48 w-48 md:h-64 md:w-64 flex-shrink-0">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={profile.name}
                  width={400}
                  height={400}
                  data-ai-hint={profileImage.imageHint}
                  className="rounded-full object-cover border-4 border-primary/50 shadow-lg"
                  priority
                />
              )}
            </div>
            <div className="text-center md:text-left">
              <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl md:text-2xl text-muted-foreground font-headline">
                {profile.title}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-4 md:justify-start">
                <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary-foreground">
                  <Mail className="h-4 w-4" /> {profile.contact.email}
                </a>
                <a href={`tel:${profile.contact.phone}`} className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary-foreground">
                  <Phone className="h-4 w-4" /> {profile.contact.phone}
                </a>
                <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary-foreground">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="h-4 w-4" /> {profile.contact.location}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="about" className="mb-16 rounded-lg bg-card p-8 shadow-sm">
            <p className="text-center text-lg leading-relaxed text-card-foreground">
                {profile.summary}
            </p>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Skills</h2>
          <Card>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-headline text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-4">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}</span>
                      </div>
                      <Progress value={skill.expertise} aria-label={`${skill.name} expertise`} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="relative">
             <div className="absolute left-5 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 flex w-full items-start">
                   <div className="z-10 absolute left-5 top-1 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-md md:left-1/2">
                       {experienceIcon(exp.type)}
                   </div>
                   <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                      <div className={`p-6 rounded-lg bg-card shadow-sm ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                          <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                          <p className="font-semibold text-foreground mb-2">{exp.organization}</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                      </div>
                   </div>
                </div>
              ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Lightbulb className="h-6 w-6 text-primary-foreground" />
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
        </section>
        
        <section id="anchoring" className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Anchoring Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {anchoring.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                   <div className="flex items-center gap-3">
                     <Mic className="h-5 w-5 text-primary-foreground" />
                     <CardTitle className="font-headline text-lg">{event.event}</CardTitle>
                   </div>
                  <CardDescription>{event.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="achievements" className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Achievements & Awards</h2>
          <Accordion type="multiple" className="w-full" defaultValue={['achievements', 'debate', 'scholarships']}>
            <AccordionItem value="achievements">
              <AccordionTrigger className="font-headline text-xl">Key Achievements</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-4">
                  {achievements.map((ach, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      {achievementIcon(ach.type)} {ach.title} ({ach.type}) - <span className="italic ml-1">{ach.event}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="debate">
              <AccordionTrigger className="font-headline text-xl">Debate Accomplishments</AccordionTrigger>
              <AccordionContent>
                 <ul className="space-y-2 pl-4">
                  {debateAchievements.map((ach, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Trophy className="mr-2 h-4 w-4 text-amber-500" /> {ach.title} - <span className="italic ml-1">{ach.event}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="scholarships">
              <AccordionTrigger className="font-headline text-xl">Scholarships & Recognitions</AccordionTrigger>
              <AccordionContent>
                 <ul className="space-y-2 pl-4">
                  {scholarships.map((sch, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <BookOpen className="mr-2 h-4 w-4 text-green-500" /> {sch.title} - <span className="italic ml-1">{sch.event}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section id="education" className="mb-16">
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                    <div>
                      <CardTitle className="font-headline text-lg">{edu.institution}</CardTitle>
                      <CardDescription>{edu.degree} in {edu.field}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium">{edu.period}</p>
                  <p className="text-sm text-muted-foreground">{edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
           <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
           <div className="flex items-center space-x-4">
              <a href={`mailto:${profile.contact.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Mail className="h-5 w-5" /></a>
              <a href={`https://`+profile.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href={`tel:${profile.contact.phone}`} aria-label="Phone" className="text-muted-foreground hover:text-primary-foreground transition-colors"><Phone className="h-5 w-5" /></a>
           </div>
        </div>
      </footer>
    </div>
  );
}
