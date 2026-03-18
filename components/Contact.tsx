"use client";

import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
          <div className="w-12 h-[2px] bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Location</h3>
            <p className="text-lg text-foreground font-light">
              123 Culinary Avenue<br />
              Kathmandu, Nepal
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Hours</h3>
            <p className="text-lg text-foreground font-light">
              Mon - Sun<br />
              8:00 AM - 11:00 PM
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Contact</h3>
            <p className="text-lg text-foreground font-light">
              +977 980-0000000<br />
              hello@thelocalzhub.com
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
