import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para receber candidatos?",
    answer: "A maioria dos nossos clientes recebe os primeiros candidatos em menos de 1 hora após publicar a vaga. O tempo médio de contratação é menor que 24 horas.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Você paga apenas R$ 29 por vaga publicada. Não há mensalidades, taxas escondidas ou compromissos. Pague apenas quando precisar contratar.",
  },
  {
    question: "Os candidatos são realmente compatíveis?",
    answer: "Sim! Nossa tecnologia analisa o perfil da vaga e conecta você apenas com candidatos que atendem aos requisitos básicos, economizando seu tempo.",
  },
  {
    question: "Posso conversar com os candidatos pelo app?",
    answer: "Sim, oferecemos chat integrado para você conversar diretamente com os candidatos, agendar entrevistas e tirar dúvidas antes de contratar.",
  },
  {
    question: "E se eu não gostar do serviço?",
    answer: "Oferecemos garantia de satisfação. Se você não receber nenhum candidato compatível em 48 horas, devolvemos 100% do valor pago.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a WeKeep.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border shadow-sm px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;