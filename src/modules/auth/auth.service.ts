import { db } from "../../config/db";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { hashPassword, comparePassword } from "../../utils/hash";
import { createAccessToken, createRefreshToken } from "../../utils/token";

export async function registerUser(email: string, password: string) {
  if (!email || !password) {
    throw new Error("Invalid Input");
  }

  const existing = await db.select().from(users).where(eq(users.email, email));
  
  // existing is an array, check length
  if (existing.length > 0) {
    throw new Error("Email already exists");
  }

  const hashed = await hashPassword(password);

  const [user] = await db
    .insert(users)
    .values({
      email,
      password: hashed.toString(), 
    })
    .returning();

  if (!user) {
    throw new Error("Failed to create user");
  }

  return {
    id: user.id,
    email: user.email,
    role: user.role,
    created_At: user.created_At,
  };
}

export async function loginUser(email: string, password: string) {
  if (!email || !password) {
    throw new Error("Invalid Input");
  }

  const [user] = await db.select().from(users).where(eq(users.email, email));

  if (!user) throw new Error("Invalid Credentials");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid Credentials");

  const access = createAccessToken(user);
  const refresh = createRefreshToken(user);

  return {
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      created_At: user.created_At,
    },
    access,
    refresh,
  };
}