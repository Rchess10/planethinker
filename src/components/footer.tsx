export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-primary">Planethinker</span>
            <p className="text-sm leading-6 text-foreground/70">
              Exploring ideas through videos, podcasts, and in-depth analysis.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Content</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="/videos" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      Videos
                    </a>
                  </li>
                  <li>
                    <a href="/podcasts" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a href="/analysis" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      Analysis
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-foreground/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-foreground/70">
            © {new Date().getFullYear()} Planethinker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
