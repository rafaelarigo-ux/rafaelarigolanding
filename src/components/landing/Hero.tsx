import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
              +2.500 vagas publicadas
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Contrate rápido.{" "}
              <span className="gradient-text">Sem dor de cabeça.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Publique sua vaga e receba candidatos compatíveis em poucos minutos, 
              sem processos longos ou improviso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button variant="cta" size="xl" className="group">
                Publicar vaga agora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                Ver como funciona
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Grátis para começar
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Candidatos em minutos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                Sem mensalidade
              </div>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Main card */}
              <div className="bg-card rounded-2xl shadow-card p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">W</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">WeKeep</h3>
                    <p className="text-sm text-muted-foreground">Contratação inteligente</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Vendedor(a) de Loja</span>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                        8 candidatos
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>São Paulo, SP</span>
                      <span>•</span>
                      <span>Publicada há 2h</span>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Atendente de Padaria</span>
                      <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        12 candidatos
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>Rio de Janeiro, RJ</span>
                      <span>•</span>
                      <span>Publicada há 5h</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-4 border animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Novo candidato!</p>
                    <p className="text-xs text-muted-foreground">Maria S. se candidatou</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;