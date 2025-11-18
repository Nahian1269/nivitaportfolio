import { profile } from '@/lib/data';
import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href={`mailto:${profile.contact.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
          <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
          <a href={`tel:${profile.contact.phone}`} aria-label="Phone" className="text-muted-foreground hover:text-primary transition-colors"><Phone className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
