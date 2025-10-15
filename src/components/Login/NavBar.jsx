import {SidebarTrigger } from "@/components/ui/sidebar"
import {User, UserStar } from "lucide-react"

function NavBar({user, role, foto}) {
  return (
    <>
      <nav className="dark:bg-sidebar h-auto  top-0 w-full bg-white border-1">
        <div className="px-3 py-3 lg:px-5 flex justify-between">
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