
import { timestamp, boolean } from "drizzle-orm/pg-core";

import { pgTable } from "drizzle-orm/pg-core";
import { integer,uuid,varchar } from "drizzle-orm/pg-core";

export const users= pgTable("users",{
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  email: varchar("email",{length:255}).notNull().unique(),
  password: varchar("password",{length:255}).notNull(),
  role:varchar("role",{length:32}).default("user"),
  created_At:timestamp("created_At").defaultNow(),

});
export const tasks= pgTable("tasks",{
  id:uuid("id").primaryKey().notNull().defaultRandom(),
  userId:uuid("user_id").notNull(),
  title:varchar("title",{length:255}).notNull(),
  priority:integer("priority").default(1),
  completed:boolean("completed").default(false),
  created_At:timestamp("created_at").defaultNow()
});