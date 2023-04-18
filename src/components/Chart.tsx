import { useEffect, type FC, useRef, useState } from "react"
import { type Chart as ChartType } from "@antv/g2"
import { Row } from "antd"
import { type CovidData } from "~/hooks/useFetchCovidData"

export type ChartProps = {
  data: CovidData | undefined
  isFetchingChartData: boolean
  renderChart: (
    container: string | HTMLElement,
    data: CovidData,
  ) => Promise<ChartType>
}

const Chart: FC<ChartProps> = ({
  data: chartData,
  isFetchingChartData,
  renderChart,
}) => {
  const chartElement = useRef(null)
  const [chartInstance, setChartInstance] = useState<ChartType>()

  useEffect(() => {
    const handleRenderChart = async () => {
      if (chartElement.current && chartData) {
        if (chartInstance) {
          // destroy previous chart for being replaced by new one with updated data
          chartInstance.destroy()
          setChartInstance(undefined)
        }

        // initialize new chart
        const chart = await renderChart(chartElement.current, chartData)
        setChartInstance(chart)
      }
    }

    void handleRenderChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartData])

  return (
    <>
      {(isFetchingChartData || !chartInstance) && "Loading..."}
      <Row ref={chartElement}></Row>
    </>
  )
}

export default Chart
