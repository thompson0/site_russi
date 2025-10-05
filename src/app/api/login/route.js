import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { serialize } from "cookie";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  console.log("Usuário encontrado:", user);

  if (!user) {
    return new Response(JSON.stringify({ message: "Usuário não encontrado" }), {
      status: 401,
    });
  }


  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return new Response(JSON.stringify({ message: "Senha incorreta ou E-mail incorretos" }), {
      status: 401,
    });
  }

  const token = signToken({ id: user._id, role: user.role });
  const cookie = serialize("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  return new Response(
    JSON.stringify({ message: "Login feito com sucesso", role: user.role }),
    {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "application/json",
      },
    }
  );
}
