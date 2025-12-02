CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"title" varchar NOT NULL,
	"priority" integer DEFAULT 1,
	"completed" boolean DEFAULT false,
	"created_at" "cal::local_datetime" DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"role" varchar DEFAULT 'user',
	"created_At" "cal::local_datetime" DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
