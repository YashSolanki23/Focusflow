import postgres from "postgres";
import {drizzle} from "drizzle-orm/postgres-js"
import { ENV } from "./env";

const client=postgres(ENV.DATABASE_URL,{prepare:true})

export const db=drizzle(client)