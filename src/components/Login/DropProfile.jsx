import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";

function DropProfile({name , picture}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={picture} />
                <AvatarFallback> {name?.charAt(0) || "?"}</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/admin/user`}>
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default DropProfile;