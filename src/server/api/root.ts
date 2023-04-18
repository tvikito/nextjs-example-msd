import { createTRPCRouter } from "~/server/api/trpc"
import { chartsRouter } from "~/server/api/routers/charts"

// main router
export const appRouter = createTRPCRouter({
  charts: chartsRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
