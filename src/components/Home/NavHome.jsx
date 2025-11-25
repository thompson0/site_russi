"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DarkMode } from "./Darkmode";
import { MonitorPlay } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

function NavHome() {
  return (
    <nav className="top-0 left-0 w-full flex justify-between items-center p-4">

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <DarkMode />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-4">

          <NavigationMenuItem>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/visitante/videos">
              <Button className="flex gap-2 items-center">
                Vídeos <MonitorPlay size={16} />
              </Button>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

    </nav>
  );
}

export default NavHome;
