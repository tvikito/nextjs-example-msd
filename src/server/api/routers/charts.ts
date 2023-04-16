import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const chartsRouter = createTRPCRouter({
  getFavorite: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input: { id } }) => {
      return ctx.prisma.favoriteChart.findUnique({ where: { id } });
    }),

  setFavorite: publicProcedure
    .input(z.object({ id: z.string(), isFavorite: z.boolean() }))
    .mutation(({ ctx, input: { id, isFavorite } }) => {
      return ctx.prisma.favoriteChart.update({
        where: { id },
        data: { isFavorite }
      });
    })
});
