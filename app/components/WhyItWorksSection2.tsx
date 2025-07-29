'use client'
import { TrendingUp, Clock, Target } from "lucide-react";
import { AnimatedBeamMultipleOutputDemo } from "./ui/AnimatedBeamMultipleOutputDemo";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';

// Define the benefit item type
type BenefitItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  stat: string;
  title: string;
  cornerStyle?: string;
};

// Create benefit data array for left column
const leftBenefits: BenefitItem[] = [
  {
    icon: Target,
    stat: "50%+",
    title: "Instantly eliminates unqualified leads — saving hours every week",
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: TrendingUp,
    stat: "20-30%",
    title: "Boosts call bookings with AI-driven lead nurturing (no manual follow-ups)",
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Clock,
    stat: "2x Faster",
    title: "Hot leads reach you in real time — so you close deals before competitors",
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];


// Benefit card component
const BenefitCard = ({ benefit }: { benefit: BenefitItem }) => {
  const Icon = benefit.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-xl px-3 pt-3 pb-3 text-sm',
          'bg-secondary/50 ring-border ring',
          benefit.cornerStyle,
        )}
      >
        <div className="text-primary mb-2 text-[1.5rem]">
          <Icon />
        </div>
        <p className="text-2xl  font-poppins text-black mb-2">{benefit.stat}</p>
        <h3 className="text-muted-foreground text-base text-prettyy">
          {benefit.title}
        </h3>
        {/* Decorative elements */}
        <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

const WhyItWorksSection = () => {
  return (
    <section className="pt-20 pb-8 bg-muted/20" id="why-it-works">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        {/* Header Section - Moved to top */}
        <div className="text-center mb-12">
          <div className="bg-primary text-foreground ring-border relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
            <span className="relative z-1 flex items-center gap-2">
              System Benefits
            </span>
            <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
            <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent sm:mb-2.5 md:text-5xl"
          >
            Why Coaches Love the LQ-SC System
          </motion.h2>
          <p className="text-muted-foreground mx-auto max-w-md text-center text-pretty text-lg">
            Proven results that transform your coaching business with intelligent automation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Benefits */}
          <div className="flex flex-col gap-6">
            {leftBenefits.map((benefit, index) => (
              <BenefitCard key={`benefit-${index}`} benefit={benefit} />
            ))}
          </div>

          {/* Right column - Animation */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <AnimatedBeamMultipleOutputDemo className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;