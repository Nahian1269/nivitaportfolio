import { profile } from '@/lib/data';
import SectionWrapper from './section-wrapper';

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg md:text-xl leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>
      </div>
    </SectionWrapper>
  );
}
