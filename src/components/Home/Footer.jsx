import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Russi Acessórios"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <span className="font-bold text-xl">Russi Acessórios</span>
                <p className="text-xs text-slate-400">Desde 1986</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Especialistas em terceirização de acessórios automotivos para concessionárias.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/visitante/videos" className="hover:text-white transition-colors">Vídeos</Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">Área do Cliente</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Marcas Atendidas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Hyundai</li>
              <li>Honda</li>
              <li>Toyota</li>
              <li>Volkswagen</li>
              <li>Chevrolet</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>contato@russi.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Seg - Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {year} <span className="font-medium text-white">Russi Acessórios</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
