import prismaModule from '@prisma/client'

const { PrismaClient } = prismaModule

export const dbClient = new PrismaClient()
