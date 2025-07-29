'use client';
import { motion } from "framer-motion";
import { Shield, Clock, Wrench } from "lucide-react";
import { JSX } from "react";

const guarantees = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "30-Day Results",
    description: "See improvement in your first month"
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Free Optimization",
    description: "We&apos;ll keep working until it&apos;s perfect"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Zero Risk",
    description: "Your investment is protected"
  }
];

const GuaranteeCard = ({ guarantee }: { guarantee: { icon: JSX.Element, title: string, description: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group transform-gpu space-y-3 rounded-xl border border-border bg-card hover:bg-primary p-4 [box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.2)_inset] hover:[box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.4)_inset] transition-all duration-300 cursor-pointer"
    >
      <div className="text-primary group-hover:text-black w-fit transform-gpu rounded-full border border-border bg-card group-hover:bg-primary p-4 [box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.25)_inset] dark:[box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.1)_inset] transition-all duration-300">
        {guarantee.icon}
      </div>
      <h4 className="font-geist text-lg font-bold tracking-tighter text-black group-hover:text-primary-foreground transition-colors duration-300">
        {guarantee.title}
      </h4>
      <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
        {guarantee.description}
      </p>
    </motion.div>
  );
};

const GuaranteesSection = () => {
  return (
    <section className="py-20 bg-muted/20" id="guarantees">
      <div className="mx-6 max-w-[1120px] pt-2 max-[300px]:mx-4 min-[1150px]:mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="bg-primary text-foreground ring-border relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
            <span className="relative z-1 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Your Success Is Guaranteed
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
            Your Success Is Guaranteed
          </motion.h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-center text-pretty text-lg">
            If we don&rsquo;t reduce your unqualified leads by at least <span className="font-bold text-primary">50% within 30 days</span>, we&rsquo;ll optimize the system for free until it performs.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard key={`guarantee-${index}`} guarantee={guarantee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
