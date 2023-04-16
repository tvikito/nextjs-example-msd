import { useEffect, type FC, useRef, useState } from 'react';
import { type Chart as ChartType } from '@antv/g2';
import { Row } from 'antd';
import {
  type ChartOneDataType,
  useChartOneData
} from '~/hooks/useChartOneData';

const ChartOne: FC = () => {
  const chartElement = useRef(null);
  const [chartInstance, setChartInstance] = useState<ChartType>();

  const chartData = useChartOneData();

  useEffect(() => {
    const handleRenderChart = async () => {
      if (chartElement.current) {
        if (chartInstance) {
          // destroy previous chart for being replaced by new one with updated data
          chartInstance.destroy();
          setChartInstance(undefined);
        }

        // initialize new chart
        const chart = await renderChart(chartElement.current, chartData);
        setChartInstance(chart);
      }
    };

    void handleRenderChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Row ref={chartElement} />;
};

const renderChart = async (
  container: string | HTMLElement,
  data: ChartOneDataType
) => {
  const ChartG2 = (await import('@antv/g2')).Chart;

  const chart = new ChartG2({
    container,
    autoFit: true,
    height: 300
  });

  chart.data(data);

  chart.interval().position('genre*sold');

  chart.render();

  return chart;
};

export default ChartOne;
