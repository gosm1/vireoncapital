'use client';
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    "You're stuck replying to DMs from people who ghost when you mention pricing.",
    "Your income feels like a rollercoaster with no predictable lead flow.",
    "You waste hours chasing leads that never convert.",
    "You're drowning in unqualified prospects while real clients slip away."
  ];

  return (
    <section className="section-padding bg-muted/20 py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent py-4 sm:text-5xl md:text-5xl lg:text-6xl mb-6"
            >
              Does This sound like you?
            </motion.h1>
            
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-primary/10 rounded-xl border border-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-inter text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-destructive/10 p-8 rounded-2xl border-2 border-destructive/20 max-w-md relative">
              <h3 className="text-2xl font-bold font-poppins text-destructive mb-4">
                The Hidden Cost
              </h3>
              <p className="text-lg text-destructive/80 mb-4">
                Coaches waste <span className="font-bold">15-20 hours per week</span> on unqualified leads.
              </p>
              <p className="text-sm text-muted-foreground">
                That&rsquo;s $2,000-5,000 in lost revenue monthly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
