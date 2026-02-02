import { ShieldCheck } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-bg mb-6">
            <ShieldCheck className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Garantia de Satisfação
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Se você não receber candidatos compatíveis em até 48 horas, 
            devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium">
            <ShieldCheck className="w-4 h-4" />
            Garantia de 48 horas
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;