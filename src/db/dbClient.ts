import { PrismaClient } from '@prisma/client'

let dbClient: PrismaClient

export const getDbClient = (): PrismaClient => {
	if (!dbClient) {
		dbClient = new PrismaClient()
	}

	return dbClient
}
