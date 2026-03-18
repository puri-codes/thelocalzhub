"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 bg-muted/30 dark:bg-[#0F0F0F] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Story of <br />
              <span className="text-primary italic font-light">The Localz Hub</span>
            </h2>
            <div className="w-12 h-[2px] bg-primary mb-8" />
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                Born from a passion for authentic culinary experiences, The Localz Hub is more than just a restaurant. It is a celebration of local flavors elevated to a premium dining standard.
              </p>
              <p>
                We believe in the power of good food to bring people together. Our chefs meticulously craft each dish using the finest ingredients, blending traditional recipes with modern techniques to create a menu that is both familiar and exciting.
              </p>
              <p>
                Whether you are here for a casual brunch, a lively evening with friends, or a quiet dinner, our youth-friendly vibe and elegant ambiance provide the perfect backdrop for unforgettable moments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[400px] flex items-center justify-center"
          >
            {/* Abstract typographic/geometric composition instead of an image */}
            <div className="absolute inset-0 border border-border dark:border-white/5 rounded-3xl overflow-hidden bg-background dark:bg-[#0B0B0B] flex flex-col items-center justify-center p-12 text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(212,175,55,0.05)_0%,transparent_50%)]" />
              <h3 className="font-display text-sm md:text-base text-foreground font-bold uppercase tracking-tighter select-none">
              The
              </h3>
              <h3 className="font-display text-6xl md:text-8xl text-foreground font-bold uppercase tracking-tighter select-none">
              Localz
              </h3>
              <h3 className="font-display text-6xl md:text-8xl text-foreground font-bold uppercase tracking-tighter select-none">
                Hub
              </h3>
              <div className="mt-8 text-primary font-mono text-sm tracking-[0.3em] uppercase">
                Est. 2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
