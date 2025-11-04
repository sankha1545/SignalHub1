import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.SESSION_SECRET!;

export async function createSession(res: any, userId: string) {
  const token = jwt.sign({ userId }, SECRET, { expiresIn: "7d" });
  res.cookies.set("session", token, { httpOnly: true, path: "/" });
}

export async function getSession() {
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  try {
    return jwt.verify(token, SECRET) as { userId: string };
  } catch {
    return null;
  }
}
