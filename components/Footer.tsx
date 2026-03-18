import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-xl font-bold tracking-tight text-foreground">
          The Localz Hub
        </div>
        <div className="text-sm text-muted-foreground font-light">
          &copy; {new Date().getFullYear()} The Localz Hub. All rights reserved.
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://www.instagram.com/the_localz_hub/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/people/The-Localz-Hub/61582702912993/#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
