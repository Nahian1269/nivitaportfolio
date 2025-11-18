import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { profile } from '@/lib/data';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 min-h-[calc(100vh-4rem)]">
                <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up">
                    <span className="font-headline text-primary text-lg mb-2">Hello, I'm</span>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground leading-tight">
                        {profile.name}
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl">
                        {profile.title}
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                         <Button asChild size="lg">
                            <a href="/cv.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Download CV
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a href="#about">
                                Learn More
                            </a>
                        </Button>
                    </div>
                     <div className="mt-8 flex flex-col items-center md:items-start space-y-3 text-sm text-muted-foreground">
                        <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 transition-colors hover:text-primary">
                            <Mail className="h-4 w-4" /> <span>{profile.contact.email}</span>
                        </a>
                        <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-primary">
                            <Linkedin className="h-4 w-4" /> <span>LinkedIn Profile</span>
                        </a>
                        <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4" /> <span>{profile.contact.location}</span>
                        </div>
                    </div>
                </div>
                 <div className="relative h-80 w-80 lg:h-96 lg:w-96 mx-auto animate-fade-in">
                    {profileImage && (
                        <Image
                        src={profileImage.imageUrl}
                        alt={profile.name}
                        fill
                        data-ai-hint={profileImage.imageHint}
                        className="rounded-full object-cover border-8 border-card shadow-2xl"
                        priority
                        />
                    )}
                    <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
  );
}
