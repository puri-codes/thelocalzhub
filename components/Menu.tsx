"use client";

import { menuData } from "@/data/menu";
import { motion } from "motion/react";

export function Menu() {
  return (
    <section id="menu" className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Menu</h2>
          <div className="w-12 h-[2px] bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
          {menuData.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx % 2 === 0 ? 0 : 0.2 }}
              className="mb-8"
            >
              <h3 className="font-display text-2xl font-semibold text-primary mb-8 uppercase tracking-widest">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex justify-between items-baseline">
                      <h4 className="text-base md:text-lg font-medium text-foreground">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dashed border-border relative top-[-6px]" />
                      <span className="text-base md:text-lg font-mono text-muted-foreground">
                        Rs. {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
