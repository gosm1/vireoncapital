'use client'
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const comparison = [
    { item: "Custom Website Development", separate: "$800", included: true },
    { item: "AI Lead Scoring System", separate: "$600", included: true },
    { item: "Automated Email Sequences", separate: "$400", included: true },
    { item: "CRM Setup & Integration", separate: "$500", included: true },
    { item: "Real-time Alert System", separate: "$300", included: true },
    { item: "30-Day Optimization", separate: "$400", included: true }
  ];

  return (
    <section className="px-4 md:px-8 lg:px-12 bg-muted/20  relative overflow-hidden py-8">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="border-primary/20 bg-primary/5 mb-4 rounded-full px-4 py-1 text-sm font-medium inline-flex items-center border">
            <Sparkles className="text-primary mr-1 h-3.5 w-3.5 animate-pulse" />
            Investment Breakdown
          </div>
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent py-4 sm:text-5xl md:text-5xl lg:text-5xl"
            >
            All of This for Just <span className="from-primary to-primary/70 bg-gradient-to-br bg-clip-text text-transparent">$1,500</span>

            </motion.h1>
          <p className="text-muted-foreground max-w-md mx-auto pt-1 text-lg">
            If purchased separately, this would cost <span className="line-through text-destructive">$3000</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-poppins mb-6">Value Breakdown:</h3>
            
            {comparison.map((item, index) => (
              <div 
                key={index}
                className="bg-secondary/20 relative text-left transition-all duration-300 hover:shadow-lg hover:border-primary/30 flex items-center justify-between p-4 rounded-lg border"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-inter text-foreground">{item.item}</span>
                </div>
                <span className="font-bold text-muted-foreground line-through">{item.separate}</span>
                
                {/* Hover effect overlay */}
                <div className="hover:border-primary/10 pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </div>
            ))}
            
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Separate Total:</span>
                <span className="text-destructive line-through">$3000</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="max-w-sm w-full">
              {/* Pricing Card */}
              <div
                className="rounded-xl border border-primary bg-card p-8 [box-shadow:0_-20px_80px_-20px_hsl(135,95%,83%,0.2)_inset] relative text-center"
              >
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full px-6 py-2 shadow-lg inline-flex items-center font-semibold">
                    <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                    Most Popular
                  </div>
                </div>

                {/* Header */}
                <div className="pt-6 mb-8">
                  <h3 className="text-xl font-semibold text-muted-foreground mb-3">Complete LQ-SC System</h3>
                  <div className="mb-4">
                    <span className="text-6xl font-bold font-poppins text-primary">$1,500</span>
                  </div>
                  <p className="text-base text-muted-foreground">One-time investment</p>
                  
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    "Custom Website Development",
                    "AI Lead Scoring System", 
                    "Automated Email Sequences",
                    "CRM Setup & Integration",
                    "Real-time Alert System",
                    "30-Day Optimization"
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center space-y-1">
                  <p className="text-sm text-muted-foreground">
                    ⚡ Limited Time Offer
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    Next 10 spots only • 30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;