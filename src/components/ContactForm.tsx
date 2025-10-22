import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Olá! Meu nome é ${name}. ${message}${email ? ` (Email: ${email})` : ''}${phone ? ` (Tel: ${phone})` : ''}`;
    const whatsappUrl = `https://wa.me/5549999868357?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será direcionado para continuar a conversa.",
    });
    
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="font-inter text-xl text-muted-foreground">
              Tire suas dúvidas e saiba mais sobre os cursos
            </p>
          </div>

          <Card className="p-8 shadow-glow animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-inter">Nome *</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Seu nome completo"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-inter">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="font-inter">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message" className="font-inter">Mensagem *</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="Conte-nos o que você gostaria de aprender..."
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem via WhatsApp
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
