import { FileText, Send, UserCheck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Crie sua vaga",
    description: "Descreva o que você precisa em menos de 5 minutos. Simples e direto.",
  },
  {
    icon: Send,
    step: "02",
    title: "Publique e espere",
    description: "Sua vaga é divulgada automaticamente para candidatos da sua região.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Escolha e contrate",
    description: "Receba candidatos compatíveis, converse pelo app e contrate rápido.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para encontrar o candidato ideal para sua vaga.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-8 border shadow-card text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Passo {step.step}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;