import { Button } from "../ui/button";

function HamburgerButton() {
    return (  
        <>
            <div className="flex flex-row justify-evenly">
                <Button>Home</Button>
                <Button>Home Instalador</Button>
                <Button>Catálogo</Button>
                <Button>Perfil</Button>
                <Button>Admin</Button>
                <Button>Dashboard</Button>
                <Button>Sair</Button>
            </div>
        </>
    );  
}

export default HamburgerButton;