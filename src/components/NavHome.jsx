"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

function NavHome() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-gray-50 dark:bg-gray-900">
      <nav className="absolute top-0 left-0 w-full flex justify-end p-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </nav>

      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Bem-vindo!
        </h1>
      </div>
    </div>
  )
}

export default NavHome
