import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForms() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground">Envie sua mensagem</h3>
        <p className="text-muted-foreground mt-1">
          Preencha o formulário e entraremos em contato em breve.
        </p>
      </div>

      <form className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="João Silva"
              className="h-12 bg-accent/50 border-border focus:border-primary"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-sm font-medium">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              className="h-12 bg-accent/50 border-border focus:border-primary"
              required
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-sm font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="h-12 bg-accent/50 border-border focus:border-primary"
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="company" className="text-sm font-medium">Empresa / Concessionária</Label>
          <Input
            id="company"
            type="text"
            placeholder="Nome da sua empresa"
            className="h-12 bg-accent/50 border-border focus:border-primary"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="text-sm font-medium">Mensagem</Label>
          <Textarea
            id="message"
            placeholder="Como podemos ajudar sua concessionária?"
            className="min-h-[120px] bg-accent/50 border-border focus:border-primary resize-none"
            required
          />
        </div>

        <Button 
          type="submit" 
          size="lg"
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold mt-2"
        >
          <Send className="w-4 h-4 mr-2" />
          Enviar Mensagem
        </Button>
      </form>
    </div>
  )
}

export default ContactForms;
