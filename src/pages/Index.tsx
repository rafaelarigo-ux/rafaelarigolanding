import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentials from "@/components/landing/Differentials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Guarantee from "@/components/landing/Guarantee";
import ContactForm from "@/components/landing/ContactForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* 1. Hero - capturar atenção e comunicar valor */}
        <Hero />
        
        {/* 2. Benefícios - tornar o ganho claro */}
        <Benefits />
        
        {/* 3. Prova social - reduzir desconfiança */}
        <SocialProof />
        
        {/* 4. Como funciona - eliminar dúvidas do processo */}
        <HowItWorks />
        
        {/* 5. Oferta e diferenciais - justificar a escolha */}
        <Differentials />
        
        {/* 6. Planos e preços - facilitar decisão */}
        <Pricing />
        
        {/* 7. FAQ - remover objeções finais */}
        <FAQ />
        
        {/* 8. Garantias - reduzir risco percebido */}
        <Guarantee />
        
        {/* 9. Formulário ou CTA de conversão */}
        <ContactForm />
        
        {/* 10. CTA final - última chamada para ação */}
        <FinalCTA />
      </main>
      
      {/* 11. Rodapé - confiança e conformidade */}
      <Footer />
    </div>
  );
};

export default Index;