import { prisma } from "~/pages/api/db"

async function main() {
  const ids = ["1", "2"]

  return Promise.all(
    ids.map(
      async (id) =>
        await prisma.favoriteChart.upsert({
          where: {
            id,
          },
          create: {
            id,
            isFavorite: false,
          },
          update: {},
        }),
    ),
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
