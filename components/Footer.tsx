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
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
