"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DarkMode } from "./Darkmode"

function NavHome() {
  return (
   
      <nav className="absolute top-0 left-0 w-full flex justify-between p-4">
          <DarkMode></DarkMode>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </nav>

  )
}

export default NavHome
