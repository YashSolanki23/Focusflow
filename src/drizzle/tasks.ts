import { pgTable } from "drizzle-orm/pg-core";
import { users } from "./schema";
import { uuid } from "drizzle-orm/gel-core";
import { varchar } from "drizzle-orm/mysql-core";
import { timestamp,integer } from "drizzle-orm/gel-core";


export const tasks=pgTable("tasks",{
  id:uuid("id").primaryKey(),
  userId:uuid("user_id").notNull().references(()=>users.id,{onDelete:"cascade"}),
  title:varchar("title",{length:255}).notNull(),
  description:varchar("description",{length:255}),
  status:varchar("status",{length:32}).notNull().default("pending"),
  priority:integer("priority").notNull().default(1),
  createdAt:timestamp("created_at").notNull().defaultNow(),
  updatedAt:timestamp("updated_at").notNull().defaultNow();

});