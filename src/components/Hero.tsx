import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5549999868357?text=Olá! Gostaria de saber mais sobre os cursos de manicure.";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Unhas perfeitas" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Unhas perfeitas começam Aqui! Aprenda com quem domina a técnica.
          </h1>
          <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transforme seu talento em renda com os cursos completos de alongamento, esmaltação em gel e cuticulagem
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="cta" 
              size="xl"
              asChild
              className="min-w-[280px]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero Aprender Agora
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft animate-slide-in-left">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Prático e Profissional</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft animate-slide-in-right">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Modalidades de Curso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
