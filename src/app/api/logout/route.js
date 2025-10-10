import { cookies } from "next/headers";

export async function POST(params) {
    const cookieStore = await cookies();

    cookieStore.set("token", "", { maxAge: 0, path: "/" });

    return new Response(JSON.stringify({ message: "Logout realizado" }), { status: 200 });
}