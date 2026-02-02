import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, User } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, agreed });
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quer saber mais?
            </h2>
            <p className="text-lg text-muted-foreground">
              Deixe seu contato e receba novidades sobre a WeKeep.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border shadow-card">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-12 h-12"
                  required
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12"
                  required
                />
              </div>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
                  required
                />
                <span className="text-sm text-muted-foreground">
                  Concordo com a{" "}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  e o tratamento dos meus dados conforme a LGPD.
                </span>
              </label>
              
              <Button type="submit" variant="cta" size="lg" className="w-full group">
                Quero receber novidades
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;