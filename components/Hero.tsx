/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
            Experience Taste <br />
            <span className="text-primary italic font-light">Like Never Before</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-wide"
          >
            A symphony of local flavors and culinary excellence, crafted for the modern palate.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background dark:bg-primary dark:text-ink text-sm font-medium rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-foreground border border-border dark:border-primary/30 text-sm font-medium rounded-full hover:bg-muted dark:hover:bg-primary/10 transition-all"
            >
              View Menu
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}
