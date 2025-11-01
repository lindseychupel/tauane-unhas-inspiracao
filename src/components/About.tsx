import instructorImage from "@/assets/instructor-tauane.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem da instrutora */}
          <div className="animate-slide-in-left">
            <img 
              src={instructorImage} 
              alt="Tauane - Instrutora de Manicure" 
              className="rounded-3xl shadow-glow w-full max-w-md mx-auto"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              loading="eager"
            />
          </div>
          
          {/* Texto da história */}
          <div className="animate-slide-in-right">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conheça a Tauane
            </h2>

            {/* Texto de storytelling */}
            <div>
              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Com mais de <span className="text-primary font-semibold">10 anos de experiência</span> no mercado da beleza, Tauane é uma manicure apaixonada pela arte das unhas e dedicada a transformar vidas através do ensino.
              </p>

              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Há alguns anos, <span>Tauane</span> só queria uma renda extra. Começou fazendo unhas em casa, com um alicate simples e muita vontade de aprender. Sem imaginar, aquele pequeno sonho virou o começo de uma grande transformação.
              </p>

              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Entre uma cliente e outra, ela descobriu algo poderoso: <strong>suas mãos podiam criar muito mais do que beleza — elas criavam oportunidades.</strong>
              </p>

              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                O talento que nasceu na sala de casa levou <span>Tauane</span> a conquistar espaço em salões de alto padrão, atender mulheres incríveis e viver do que ama. Mas o que realmente mudou sua história foi perceber que poderia ajudar outras mulheres a viverem o mesmo.
              </p>

              <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
                Hoje, com mais de 10 anos de experiência no mercado da beleza, <span>Tauane</span> dedica sua carreira a ensinar e inspirar. Ela criou cursos completos — do básico ao avançado — para mostrar que, com técnica, dedicação e propósito, <strong>qualquer mulher pode transformar o próprio futuro.</strong>
              </p>

            

              <div className="mt-8 p-6 bg-gradient-rose rounded-2xl">
                <p className="font-inter text-foreground font-medium italic">
                  "Me sinto feliz e orgulhosa por ver mulheres com histórias parecidas com a minha conquistando sua independência, fazendo dinheiro com as próprias mãos e entregando qualidade."
                </p>
                <p className="font-playfair text-sm text-foreground mt-2">— Tauane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
