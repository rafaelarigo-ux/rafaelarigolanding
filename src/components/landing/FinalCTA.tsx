import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para contratar de forma inteligente?
          </h2>
          
          <p className="text-xl opacity-90 mb-8">
            Publique sua vaga e receba candidatos compatíveis em poucos minutos. 
            Sem processos longos, sem improviso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg group"
            >
              Publicar vaga agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              R$ 29 por vaga
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Garantia de 48h
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Sem mensalidade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;