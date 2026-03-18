import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Contact />
      <Footer />
    </main>
  );
}
