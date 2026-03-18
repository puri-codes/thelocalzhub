import { Navbar } from "@/components/Navbar";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <div className="pt-20">
        <Menu />
      </div>
      <Footer />
    </main>
  );
}
