import { Clock, Users, Target } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Contratação em horas, não semanas",
    description: "Receba candidatos compatíveis em poucos minutos após publicar sua vaga. Sem esperar dias por currículos.",
  },
  {
    icon: Users,
    title: "Candidatos já filtrados",
    description: "Nossa tecnologia conecta você apenas com pessoas que realmente se encaixam no perfil que você precisa.",
  },
  {
    icon: Target,
    title: "Feito para pequenos negócios",
    description: "Sem complicação. Sem processos longos. Criado especialmente para quem não tem tempo a perder.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a <span className="gradient-text">WeKeep</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simplificamos a contratação para você focar no que realmente importa: seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 border shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;