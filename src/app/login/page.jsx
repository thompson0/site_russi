import { LoginForm } from "@/components/Home/LoginForm"
import BgVideo from "@/components/Home/Video"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function LoginPage() {
  return (
    <div lang="pt-br" className="relative min-h-screen min-h-[100dvh] w-full overflow-hidden">
      <BgVideo />
      
      <Link 
        href="/"
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm sm:text-base font-medium">Voltar</span>
      </Link>

      <main className="relative z-10 min-h-screen min-h-[100dvh] flex items-center justify-center px-4 py-8 sm:px-6 md:px-8 lg:justify-start lg:pl-16 xl:pl-32">
        <LoginForm />
      </main>
    </div>
  )
}
