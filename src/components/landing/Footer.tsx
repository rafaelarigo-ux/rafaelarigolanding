const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">W</span>
            </div>
            <span className="font-semibold">WeKeep</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} WeKeep. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;