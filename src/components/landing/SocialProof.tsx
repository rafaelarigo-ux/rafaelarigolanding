import { Star } from "lucide-react";

const stats = [
  { number: "2.500+", label: "Vagas publicadas" },
  { number: "15.000+", label: "Candidatos conectados" },
  { number: "98%", label: "Clientes satisfeitos" },
  { number: "< 24h", label: "Tempo médio de contratação" },
];

const testimonial = {
  quote: "Precisava de um atendente urgente e consegui contratar em menos de um dia. Incrível como foi simples!",
  author: "Carlos Mendes",
  role: "Dono de Padaria",
  location: "São Paulo, SP",
};

const SocialProof = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-10 border shadow-card">
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-center font-medium mb-8 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;