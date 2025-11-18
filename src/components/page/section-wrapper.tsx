import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ id, title, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("animate-fade-in-up", className)}>
      <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
