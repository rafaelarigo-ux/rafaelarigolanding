import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">W</span>
            </div>
            <span className="font-bold text-lg">WeKeep</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cta" size="default">
              Publicar vaga
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="cta" size="default" className="mt-2">
                Publicar vaga
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;