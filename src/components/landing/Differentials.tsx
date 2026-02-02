import { Zap, Heart, Shield, Smartphone } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Rapidez incomparável",
    description: "Enquanto outras plataformas levam semanas, você contrata em horas.",
  },
  {
    icon: Heart,
    title: "Focado no microempreendedor",
    description: "Feito para quem não tem RH, não tem tempo e precisa de praticidade.",
  },
  {
    icon: Smartphone,
    title: "100% pelo celular",
    description: "Gerencie suas vagas e candidatos de qualquer lugar, a qualquer hora.",
  },
  {
    icon: Shield,
    title: "Candidatos verificados",
    description: "Todos os candidatos passam por validação básica de perfil.",
  },
];

const Differentials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nos torna <span className="gradient-text">diferentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Criamos a WeKeep pensando em você, microempreendedor.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;