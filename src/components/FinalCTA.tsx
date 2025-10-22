import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const FinalCTA = () => {
  const whatsappUrl = "https://wa.me/5549999868357?text=Olá! Quero garantir minha vaga nos cursos de manicure!";

  const benefits = [
    "Aulas práticas do básico ao avançado",
    "Certificado de conclusão",
    "Suporte durante e após o curso",
    "Material didático incluído",
    "Modalidades presencial e online"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Pronta Para Transformar Sua Carreira?
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground mb-8 animate-fade-in">
            Não perca a oportunidade de aprender com quem realmente entende do assunto
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-left bg-card/60 backdrop-blur-sm p-4 rounded-xl animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-inter text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="animate-scale-in">
            <Button 
              variant="cta" 
              size="xl"
              asChild
              className="min-w-[320px] text-xl py-8"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar com a Tauane no WhatsApp
              </a>
            </Button>
            
            <p className="font-inter text-sm text-muted-foreground mt-4">
              Resposta rápida • Vagas limitadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
