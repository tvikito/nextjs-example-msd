export type ChartTwoDataType = {
  item: string;
  count: number;
  percent: number;
}[];

export const useChartTwoData = (): ChartTwoDataType => {
  // TODO replace with fetched data from API
  const chartData: ChartTwoDataType = [
    { item: 'Data 1', count: 40, percent: 0.4 },
    { item: 'Data 2', count: 21, percent: 0.21 },
    { item: 'Data 3', count: 17, percent: 0.17 },
    { item: 'Data 4', count: 13, percent: 0.13 },
    { item: 'Data 5', count: 9, percent: 0.09 }
  ];

  return chartData;
};
