import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function UserCard({ name, permission, email, picture }) {
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
            className={`px-2 py-1 rounded-md text-sm font-medium `}
          >
            {permission}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}

export default UserCard;