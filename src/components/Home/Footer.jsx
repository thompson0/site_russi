import Image from "next/image";
import Link from "next/link";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.png"
                alt="Russi Acessórios"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <span className="font-bold text-base sm:text-xl">Russi Acessórios</span>
                <p className="text-[10px] sm:text-xs text-slate-400">Desde 1986</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Especialistas em terceirização de acessórios automotivos para concessionárias.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-sm sm:text-lg">Links Rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
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

          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-sm sm:text-lg">Marcas</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Hyundai</li>
              <li>Honda</li>
              <li>Toyota</li>
              <li>Volkswagen</li>
              <li>Chevrolet</li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-sm sm:text-lg">Contato</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span className="break-all">contato@russi.com.br</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                <span>Seg - Sex: 8h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
            © {year} <span className="font-medium text-white">Russi Acessórios</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
