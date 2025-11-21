import { LoginForm } from "@/components/Home/LoginForm"
import BgVideo from "@/components/Home/Video"
export default function LoginPage({ children }) {
  return (
    <div lang="pt-br" className="">
      <div className="flex flex-col min-h-screen ">
        <BgVideo></BgVideo>
        <header className="flex-grow">
        </header>
        <main>
          <div className="flex min-h-svh flex-row items-center justify-center md:justify-start md:pl-32">
            <LoginForm />
          </div>
          {children}
        </main>

      </div>
    </div>

  )
}
