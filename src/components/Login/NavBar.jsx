import {SidebarTrigger } from "@/components/ui/sidebar"
import {User, UserStar } from "lucide-react"

function NavBar({user, role, foto}) {
  return (
    <>
      <nav className=":bg-sidebar h-auto sm:h-1/12 top-0 w-full bg-white border-1">
        <div className="flex h-full items-center justify-between px-4">
        <SidebarTrigger>
        </SidebarTrigger>
          <button
            type="button"
            className=""
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
{foto ? <img src={foto} className="w-8 h-8 rounded-full" /> : role === "admin" ? <UserStar /> : <User />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;