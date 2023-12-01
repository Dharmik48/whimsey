import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../../../migrations/schema'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

if (!process.env.DATABASE_URL) {
	console.log('🔴DATABASE_URL not present')
}

const connection = postgres(process.env.DATABASE_URL as string, { max: 1 })
const db = drizzle(connection, { schema })

const migrateDb = async () => {
	try {
		console.log('🟠Mirating DB started')
		await migrate(db, { migrationsFolder: 'migrations' })
		console.log('🟢Mirating DB success')
	} catch (error) {
		console.log('🔴Mirating DB error')
	}
}

migrateDb()

export default db
