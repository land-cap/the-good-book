import prismaMod from '../../prisma-generated/index.js'
const { PrismaClient } = prismaMod

export const dbClient = new PrismaClient()
