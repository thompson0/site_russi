import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForms() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contato</CardTitle>
        <CardDescription>
          Entre em contato conosco preenchendo o formulário abaixo.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-6">

          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              required
            />
          </div>


          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              required
            />
          </div>


          <div className="grid gap-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Como podemos ajudar?"
              className="min-h-[120px]"
              required
            />
          </div>

        </form>
      </CardContent>

      <CardFooter>
        <Button type="submit" className="w-full">
          Enviar
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ContactForms;
