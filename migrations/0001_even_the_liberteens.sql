CREATE TABLE IF NOT EXISTS "files" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"icon_id" text NOT NULL,
	"in_trash" text NOT NULL,
	"workspace_owner" uuid NOT NULL,
	"data" text NOT NULL,
	"banner_url" text,
	"created_at" timestamp with time zone,
	"workspace_id" uuid,
	"folder_id" uuid
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "folders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"icon_id" text NOT NULL,
	"in_trash" text NOT NULL,
	"workspace_owner" uuid NOT NULL,
	"data" text NOT NULL,
	"banner_url" text,
	"created_at" timestamp with time zone,
	"workspace_id" uuid
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_workspace_id_workspaces_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "files" ADD CONSTRAINT "files_folder_id_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "folders"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "folders" ADD CONSTRAINT "folders_workspace_id_workspaces_id_fk" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
