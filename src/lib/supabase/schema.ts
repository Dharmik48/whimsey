import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core'

export const workspaces = pgTable('workspaces', {
	id: uuid('id').defaultRandom().primaryKey().notNull(),
	title: text('title').notNull(),
	iconId: text('icon_id').notNull(),
	inTrash: text('in_trash').notNull(),
	workspaceOwner: uuid('workspace_owner').notNull(),
	data: text('data').notNull(),
	logo: text('logo'),
	bannerUrl: text('banner_url'),
	createdAt: timestamp('created_at', {
		withTimezone: true,
		mode: 'string',
	}),
})
