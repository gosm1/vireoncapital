import {
  Globe,
  Brain,
  Mail,
  Database,
  Bell,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the service item type
type ServiceItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create service data arrays for left and right columns
const leftServices: ServiceItem[] = [
  {
    icon: Globe,
    title: 'Custom website built to convert',
    description:
      'High-converting landing pages with built-in lead qualification',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Brain,
    title: 'AI-powered lead scoring & segmentation',
    description:
      'Automatic ranking of prospects based on behavior and responses',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Mail,
    title: 'Automated email follow-ups',
    description:
      'Nurture sequences that convert cold leads into warm prospects',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightServices: ServiceItem[] = [
  {
    icon: Database,
    title: 'CRM dashboard (Airtable/Softr)',
    description:
      'All your leads organized and accessible in one place',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Bell,
    title: 'Real-time alerts when HOT leads are ready',
    description:
      'Instant notifications when prospects are ready to buy',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Zap,
    title: 'Complete system integration',
    description:
      'All tools work together seamlessly - no more piecing together different solutions',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Service card component
const ServiceCard = ({ service }: { service: ServiceItem }) => {
  const Icon = service.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pt-4 pb-4 text-sm',
          'bg-secondary/50 ring-border ring',
          service.cornerStyle,
        )}
      >
        <div className="text-primary mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-foreground mb-2.5 text-2xl">{service.title}</h2>
        <p className="text-muted-foreground text-base text-pretty">
          {service.description}
        </p>
        {/* Decorative elements */}
        <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="py-20 " id="services">
      <div className="mx-6 max-w-[1120px] pt-2  max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftServices.map((service, index) => (
              <ServiceCard key={`left-service-${index}`} service={service} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="bg-primary text-foreground ring-border relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
              <span className="relative z-1 flex items-center gap-2">
                Complete System
              </span>
              <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="text-foreground mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem]">
              Everything You Need to Qualify & Convert Leads — Done For You
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[18rem] text-center text-pretty">
              No more piecing together different tools. Get a complete system that works together seamlessly.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightServices.map((service, index) => (
              <ServiceCard key={`right-service-${index}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}