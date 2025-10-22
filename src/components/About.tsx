import instructorImage from "@/assets/instructor-tauane.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-slide-in-left">
            <img 
              src={instructorImage} 
              alt="Tauane - Instrutora de Manicure" 
              className="rounded-3xl shadow-glow w-full max-w-md mx-auto"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              loading="eager"
            />
          </div>
          
          <div className="animate-slide-in-right">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conheça a Tauane
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de <span className="text-primary font-semibold">10 anos de experiência</span> no mercado de beleza, 
              Tauane é uma manicure apaixonada pela arte das unhas e dedicada a transformar vidas através do ensino.
            </p>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              Sua jornada começou pela paixão em criar unhas perfeitas, e hoje ela compartilha todo seu conhecimento 
              e expertise com mulheres que desejam entrar no mercado da beleza ou aprimorar suas habilidades.
            </p>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Sua missão</span> é empoderar mulheres através da educação profissional, 
              oferecendo cursos completos que vão do básico ao avançado, com técnicas modernas e práticas comprovadas no mercado.
            </p>
            
            <div className="mt-8 p-6 bg-gradient-rose rounded-2xl">
              <p className="font-inter text-foreground font-medium italic">
                "Minha maior realização é ver minhas alunas conquistando independência financeira fazendo o que amam."
              </p>
              <p className="font-playfair text-sm text-foreground mt-2">— Tauane</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
