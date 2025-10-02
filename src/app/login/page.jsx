import { LoginForm } from "@/components/login-form"

export default function LoginPage({children}) {
  return (
       <html lang="pt-br" className="dark">
      <body className="flex flex-col min-h-screen bg-[url('/image.jpg')] bg-center bg-login">
        <header className="flex-grow">
        </header>
        <main>
           <div className="flex min-h-svh flex-row items-center  p-6 md:p-10">
      <div className=" w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
        {children}
        </main>

      </body>
    </html>
 
  )
}
