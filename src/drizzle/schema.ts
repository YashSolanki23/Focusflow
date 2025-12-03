import { time } from "console";
import { boolean } from "drizzle-orm/gel-core";
import { timestamp } from "drizzle-orm/gel-core";
import { pgTable } from "drizzle-orm/pg-core";
import { integer,uuid,varchar } from "drizzle-orm/pg-core";

export const users= pgTable("users",{
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  role:varchar("role").default("user"),
  created_At:timestamp("created_At").defaultNow(),

})
export const tasks= pgTable("tasks",{
  id:uuid("id").primaryKey().notNull().defaultRandom(),
  userId:uuid("user_id").notNull(),
  title:varchar("title").notNull(),
  priority:integer("priority").default(1),
  completed:boolean("completed").default(false),
  created_At:timestamp("created_at").defaultNow()
})