import { Col, Layout, Row } from "antd"
import { type NextPage } from "next"
import Head from "next/head"
import ChartWrapper from "~/components/ChartWrapper"
import HeaderCharts from "~/components/HeaderCharts"
import { useFetchCovidData } from "~/hooks/useFetchCovidData"
import { renderChartNewCasesByArea } from "~/lib/renderChartNewCasesByArea"
import { renderChartNewCasesByDate } from "~/lib/renderChartNewCasesByDate"

const Home: NextPage = () => {
  const { data, isLoading, error } = useFetchCovidData()

  return (
    <>
      <Head>
        <title>Covid cases stats</title>
      </Head>

      <Layout className="container bg-gray">
        <HeaderCharts />
        <Row gutter={[24, 16]}>
          <Col span={24} lg={12}>
            <ChartWrapper
              title="New cases in England by Date"
              isFetchingChartData={isLoading}
              error={error}
              data={data}
              // chartID would be usually fetch from database, but for simplicity let's use dummy one
              chartId="1"
              renderChart={renderChartNewCasesByDate}
            />
          </Col>
          <Col span={24} lg={12}>
            <ChartWrapper
              title="Comulative cases in UK by Area"
              isFetchingChartData={isLoading}
              error={error}
              data={data}
              // chartID would be usually fetch from database, but for simplicity let's use dummy one
              chartId="2"
              renderChart={renderChartNewCasesByArea}
            />
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default Home
