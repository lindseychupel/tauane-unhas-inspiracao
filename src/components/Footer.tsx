import { MessageCircle, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">Tauane</h3>
              <p className="font-inter text-background/80">
                Transformando vidas através da arte das unhas há mais de 10 anos.
              </p>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <a 
                  href="https://wa.me/5549999868357" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="font-inter text-sm">(49) 99986-8357</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4">Navegação</h4>
              <nav className="flex flex-col gap-2">
                <a href="#sobre" className="font-inter text-sm text-background/80 hover:text-background transition-colors">
                  Sobre
                </a>
                <a href="#cursos" className="font-inter text-sm text-background/80 hover:text-background transition-colors">
                  Cursos
                </a>
                <a href="#depoimentos" className="font-inter text-sm text-background/80 hover:text-background transition-colors">
                  Depoimentos
                </a>
                <a href="#contato" className="font-inter text-sm text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </nav>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="font-inter text-sm text-background/80">
              © {currentYear} Tauane - Cursos de Manicure. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
