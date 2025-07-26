import prismaMod from '@prisma/client'
const { PrismaClient } = prismaMod

export const dbClient = new PrismaClient()
