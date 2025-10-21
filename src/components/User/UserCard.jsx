import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function UserCard({ name, permission, email, picture }) {
  return (
    <Card className="min-h-[32rem] md:min-h-[36rem]">
      <div className="flex justify-center mt-6">
        <Avatar className="w-32 h-32">
          <AvatarImage src={picture} />
          <AvatarFallback className="text-2xl font-semibold">
            {name?.charAt(0) || "?"}
          </AvatarFallback>
        </Avatar>
      </div>
      <CardHeader className="flex justify-center text-center">
        <CardTitle className="text-4xl">{name}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-2 text-center">
        <p className="text-lg font-medium">Email</p>
        <p className="text-muted-foreground">{email}</p>
      </CardContent>

      <CardFooter className="flex justify-center mt-4">
        <p className="text-lg font-medium">
          Permissão:{" "}
          <span
            className={`px-2 py-1 rounded-md text-2xl font-semibold `}
          >
            {permission}
          </span>
        </p>
      </CardFooter>
      
    </Card>
  );
}

export default UserCard;
