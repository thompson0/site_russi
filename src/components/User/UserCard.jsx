import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function UserCard({ name, permission, email, picture }) {
   const badgeColor =
    permission === "admin"
      ? "bg-red-500 text-white"
      : "bg-green-500 text-white";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nome: {name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Email: {email}</p>
      </CardContent>

      <CardFooter>
        <p>
          Permissão:{" "}
          <span
            className={`px-2 py-1 rounded-md text-sm font-medium ${badgeColor}`}
          >
            {permission}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}

export default UserCard;