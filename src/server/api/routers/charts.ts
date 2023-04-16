import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const chartsRouter = createTRPCRouter({
  getDataChartOne: publicProcedure.query(() => {
    return [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 }
    ];
  }),
  getDataChartTwo: publicProcedure.query(() => {
    return [
      { item: 'Data 1', count: 40, percent: 0.4 },
      { item: 'Data 2', count: 21, percent: 0.21 },
      { item: 'Data 3', count: 17, percent: 0.17 },
      { item: 'Data 4', count: 13, percent: 0.13 },
      { item: 'Data 5', count: 9, percent: 0.09 }
    ];
  })
});
