import { SidebarTrigger } from "@/components/ui/sidebar";
import DropProfile from "./DropProfile";
import { getUserFromCookie } from "@/lib/auth";
async function NavBar() {
  const user = await getUserFromCookie();
  return (
    <>
      <nav className=":bg-sidebar min-h-20 top-0 w-full bg-white border-1">
        <div className="flex h-full p-5 items-center justify-between px-4">
          <SidebarTrigger>
          </SidebarTrigger>
          
          <DropProfile name={user.nome}
          picture={user.foto_url}>
            
          </DropProfile>
        </div>
      </nav>
    </>
  );
}

export default NavBar;