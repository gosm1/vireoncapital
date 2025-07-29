'use client';

import { CheckCircle, Zap, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function BeautifulCTA() {
  const benefits = [
    "50%+ reduction in bad leads",
    "20-30% boost in booking rates",
    "2x faster response to hot leads"
  ];

  return (
    <section
      className="py-10 pb-8 bg-gradient-to-br from-background via-muted/20 to-secondary/30"
      id="cta"
    >
      <div className="mx-6 pt-2 pb-16">
        <div className="relative">
          {/* Main CTA Card */}
          <div
            className={cn(
              'relative rounded-3xl px-8 pt-12 pb-12 text-center',
              'bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/10',
              'ring-2 ring-primary/20 backdrop-blur-sm',
              'overflow-hidden'
            )}
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />

            {/* Badge */}
            <div className="relative z-10 mb-6">
              <div className="bg-primary/10 text-black ring-primary/30 relative mx-auto w-fit rounded-full px-6 py-3 text-sm font-medium ring backdrop-blur-sm">
                <span className="relative z-1 flex items-center gap-2">
                  <Zap className="text-primary" />
                  Transform Your Coaching Business Today
                </span>
                <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r opacity-80" />
                <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.2)_0%,transparent_100%)]" />
              </div>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-center text-4xl tracking-tighter text-balance text-transparent  sm:text-5xl md:text-5xl lg:text-5xl mb-6"
            >
              Ready to Get More Qualified Leads?
            </motion.h1>

            {/* Subheading */}
            <p className="text-muted-foreground mt-3 mb-8 max-w-3xl mx-auto">
              Join successful coaches who&rsquo;ve transformed their lead generation with our proven LQ-SC system
            </p>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground/80 text-sm sm:text-base"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-hidden rounded-full px-6 shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Schedule Free Strategy Call
                <Phone className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>

            {/* Trust Indicator */}
            <p className="text-muted-foreground/70 text-sm mt-8">
              ✨ No setup fees • 30-day money-back guarantee • Built in 7-14 days
            </p>

            {/* Bottom Gradient Line */}
            <span className="from-primary/0 via-primary/60 to-primary/0 absolute -bottom-px left-1/2 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r" />
          </div>

          {/* Floating Decorative Cards */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl rotate-12 blur-sm opacity-60 hidden lg:block" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary/20 rounded-xl -rotate-12 blur-sm opacity-60 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
