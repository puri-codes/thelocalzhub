"use client";

import { motion } from "motion/react";

const featuredItems = [
  { name: "Crunchy Chicken Burger", price: "250", category: "Burger", desc: "Crispy fried chicken patty with fresh lettuce and house sauce." },
  { name: "Spaghetti Carbonara", price: "400", category: "Pasta", desc: "Classic creamy pasta with chicken, parmesan, and black pepper." },
  { name: "Himalayan Chicken", price: "450", category: "Special", desc: "Our signature chicken dish with authentic local spices." },
  { name: "Margherita Pizza", price: "450 / 550", category: "Pizza", desc: "Classic delight with 100% real mozzarella cheese." },
];

export function FeaturedMenu() {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Selections</h2>
          <div className="w-12 h-[2px] bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 border border-border dark:border-white/5 rounded-2xl hover:border-primary/30 transition-colors bg-muted/10"
            >
              <div className="text-primary text-xs font-mono uppercase tracking-widest mb-3">{item.category}</div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium text-foreground">{item.name}</h3>
                <span className="text-lg font-mono text-muted-foreground ml-4 shrink-0">Rs. {item.price}</span>
              </div>
              <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/menu" className="inline-block px-8 py-4 bg-transparent text-foreground border border-border dark:border-primary/30 text-sm font-medium rounded-full hover:bg-muted dark:hover:bg-primary/10 transition-all">
            Explore Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
