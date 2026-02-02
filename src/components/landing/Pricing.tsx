import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Publicação de vaga ilimitada",
  "Candidatos compatíveis",
  "Chat direto com candidatos",
  "Filtros de perfil avançados",
  "Suporte por WhatsApp",
  "Sem mensalidade fixa",
];

const Pricing = () => {
  return (
    <section id="planos" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Plano simples e transparente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pague apenas quando publicar uma vaga. Sem surpresas.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-10 border-2 border-primary shadow-xl relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 gradient-bg text-primary-foreground px-4 py-2 rounded-bl-2xl text-sm font-semibold">
              Mais popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Por Vaga</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold gradient-text">R$ 29</span>
                <span className="text-muted-foreground">/vaga</span>
              </div>
              <p className="text-muted-foreground mt-2">
                Pague apenas quando precisar
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="cta" size="xl" className="w-full group">
              Publicar minha primeira vaga
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Comece agora. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;