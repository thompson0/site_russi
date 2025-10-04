import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm(props) {
  return (
    <Card
      className="overflow-hidden p-0 w-full max-w-md mx-4 sm:mx-6 md:mx-auto lg:mx-0"
      {...props}
    >
      <CardContent className="p-6 flex flex-col gap-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <img src="logo.png" alt="" />
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground">
            Login to your Acme Inc account
          </p>
        </div>

        <form className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm underline-offset-2 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <div className="relative text-center text-sm">
            <span className="bg-card text-muted-foreground px-2">
              Or continue with
            </span>
          </div>

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
