'use client'
import { motion } from "framer-motion";
import { Filter, Brain, Zap } from "lucide-react";

const SolutionSection = () => {
  const steps = [
    {
      icon: <Filter className="h-8 w-8" />,
      title: "Smart Capture",
      description: "Filters out unqualified leads before they reach you."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Scoring",
      description: "Ranks leads (HOT, WARM, COLD) instantly using AI."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Conversion System",
      description: "Automated follow-ups + CRM + real-time alerts."
    }
  ];

  return (
    <section className="relative py-14 bg-background">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent py-4 sm:text-5xl md:text-5xl lg:text-5xl mb-6"
            >
            The LQ-SC Method™  Your 24/7 Lead Filter & Sales Assistant

            </motion.h1>
            <p className="font-geist text-muted-foreground mt-3">
              Stop wasting time on tire-kickers. Our proven 3-step system identifies and nurtures only your best prospects.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px] bg-gradient-to-br from-primary/20 via-primary/25 to-primary/10"
          ></div>
        </div>
        <hr className="bg-border mx-auto mt-5 h-px w-1/2" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group transform-gpu space-y-3 rounded-xl border border-border bg-card hover:bg-primary p-4 [box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.2)_inset] hover:[box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.4)_inset] transition-all duration-300 cursor-pointer"
              >
                <div className="text-primary group-hover:text-black w-fit transform-gpu rounded-full border border-border bg-card group-hover:bg-primary p-4 [box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.25)_inset] dark:[box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.1)_inset] transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter text-black group-hover:text-primary-foreground transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">{item.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;