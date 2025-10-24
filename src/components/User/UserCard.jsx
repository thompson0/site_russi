import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EditProfile } from "@/components/User/EditProfile"
function UserCard({ name, permission, email, picture, user }) {
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

      <CardFooter className="flex flex-col  justify-center mt-4">
        <CardTitle>
          <p className="text-4xl font-bold">
          Permissão:{" "}
          <span
            className={`px-2 py-1 rounded-md font-semibold `}
          >
            {permission}
          </span>
        </p>
        </CardTitle>
      </CardFooter>
       <EditProfile className="p-6" user={user} />
    </Card>
  );
}

export default UserCard;
