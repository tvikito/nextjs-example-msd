import { type CovidData } from '~/hooks/useFetchCovidData';

export const renderChartNewCasesByDate = async (
  container: string | HTMLElement,
  data: CovidData
) => {
  const ChartG2 = (await import('@antv/g2')).Chart;

  const chart = new ChartG2({
    container,
    autoFit: true,
    height: 300
  });

  const filteredData = data.filter((d) => !!d.newCases && d.area === 'England');

  chart.data(filteredData);
  chart.scale({
    value: {
      min: 10000,
      nice: true
    },
    year: {
      range: [0, 1]
    }
  });
  chart.tooltip({
    showCrosshairs: true,
    shared: true
  });

  chart.axis('newCases', {
    label: {
      formatter: (val) => {
        return (+val / 10000).toFixed(1) + 'k';
      }
    }
  });

  chart.area().position('date*newCases');
  chart.line().position('date*newCases');

  chart.render();

  return chart;
};
