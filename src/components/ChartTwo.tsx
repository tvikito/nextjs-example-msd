import { useEffect, type FC, useRef, useState } from 'react';
import { type Chart as ChartType } from '@antv/g2';
import { Row } from 'antd';
import {
  type ChartTwoDataType,
  useChartTwoData
} from '~/hooks/useChartTwoData';

const ChartTwo: FC = () => {
  const chartElement = useRef(null);
  const [chartInstance, setChartInstance] = useState<ChartType>();

  const chartData = useChartTwoData();

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
  data: ChartTwoDataType
) => {
  const ChartG2 = (await import('@antv/g2')).Chart;

  const chart = new ChartG2({
    container,
    autoFit: true,
    height: 300,
    theme: 'classic'
  });

  chart.data(data);

  chart.coordinate('theta', {
    radius: 0.85
  });

  chart.scale('percent', {
    formatter: (val) => `${val * 100} %`
  });
  chart.tooltip({
    showTitle: false,
    showMarkers: false
  });
  chart.axis(false);
  const interval = chart
    .interval()
    .adjust('stack')
    .position('percent')
    .color('item')
    .label('percent', {
      offset: -40,
      style: {
        textAlign: 'center',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)',
        fill: '#fff'
      }
    })
    .tooltip('item*percent', (item, percent) => ({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      name: item,
      value: `${percent * 100} %`
    }))
    .style({
      lineWidth: 1,
      stroke: '#fff'
    });
  chart.interaction('element-single-selected');
  chart.render();

  interval.elements[0]?.setState('selected', true);

  return chart;
};

export default ChartTwo;
