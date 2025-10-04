import { LoginForm } from "@/components/login-form"
import BgVideo from "@/components/video"
export default function LoginPage({ children }) {
  return (
    <html lang="pt-br" className="dark">
      <body className="flex flex-col min-h-screen ">
        <BgVideo></BgVideo>
        <header className="flex-grow">
        </header>
        <main>
          <div className="flex min-h-svh flex-row items-center justify-center md:justify-start md:pl-32">
            <LoginForm />
          </div>
          {children}
        </main>

      </body>
    </html>

  )
}
