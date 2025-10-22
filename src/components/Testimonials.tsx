import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Os cursos da Tauane mudaram minha vida! Hoje tenho minha própria clientela e trabalho no conforto da minha casa.",
      rating: 5
    },
    {
      name: "Ana Paula",
      text: "Aprendi técnicas incríveis que uso todos os dias. A Tauane é uma professora dedicada e paciente.",
      rating: 5
    },
    {
      name: "Juliana Costa",
      text: "Investimento que valeu cada centavo! Em 2 meses já estava atendendo minhas primeiras clientes com confiança.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Dizem Nossas Alunas
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso profissional
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="font-inter text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="font-playfair text-sm font-semibold text-primary">
                — {testimonial.name}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-rose px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-inter font-semibold text-foreground">
              Mais de 500 alunas formadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
