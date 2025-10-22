import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import nailArtImage from "@/assets/nail-art.jpg";
import teachingImage from "@/assets/teaching-class.jpg";

const Courses = () => {
  const courses = [
    {
      title: "Cuticulagem Profissional",
      description: "Aprenda as técnicas corretas de remoção e tratamento de cutículas",
      topics: [
        "Técnicas de preparação das unhas",
        "Uso correto de instrumentos",
        "Protocolos de higiene e segurança",
        "Práticas em modelos reais"
      ]
    },
    {
      title: "Alongamento em Fibra",
      description: "Domine a arte do alongamento de unhas com fibra de vidro",
      topics: [
        "Preparação e estruturação",
        "Aplicação de fibra de vidro",
        "Modelagem e finalização",
        "Manutenção e remoção segura"
      ]
    },
    {
      title: "Esmaltação em Gel",
      description: "Técnicas modernas de aplicação e design em gel",
      topics: [
        "Preparação e aplicação base",
        "Técnicas de coloração",
        "Nail art e decorações",
        "Acabamento profissional duradouro"
      ]
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cursos Disponíveis
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto">
            Do básico ao avançado, aprenda tudo que você precisa para se tornar uma profissional de sucesso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <div className="animate-slide-in-left">
            <img 
              src={nailArtImage} 
              alt="Nail art profissional" 
              className="rounded-3xl shadow-glow w-full h-64 object-cover"
            />
          </div>
          <div className="animate-slide-in-right">
            <img 
              src={teachingImage} 
              alt="Aula prática" 
              className="rounded-3xl shadow-glow w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                {course.title}
              </h3>
              <p className="font-inter text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <ul className="space-y-3">
                {course.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm text-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-8 bg-gradient-gold">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
              Modalidades
            </h3>
            <p className="font-inter text-lg text-foreground">
              Cursos disponíveis <span className="font-semibold">presenciais</span> e <span className="font-semibold">online</span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
