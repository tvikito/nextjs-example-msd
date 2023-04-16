import { Col, Layout, Row } from 'antd';
import { type NextPage } from 'next';
import Head from 'next/head';
import ChartOne from '~/components/ChartOne';
import ChartTwo from '~/components/ChartTwo';
import ChartWrapper from '~/components/ChartWrapper';
import HeaderCharts from '~/components/HeaderCharts';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MSD example app</title>
      </Head>

      <Layout className="container bg-gray">
        <HeaderCharts />
        <Row gutter={[24, 16]}>
          <Col span={24} lg={12}>
            <ChartWrapper>
              <ChartOne />
            </ChartWrapper>
          </Col>
          <Col span={24} lg={12}>
            <ChartWrapper>
              <ChartTwo />
            </ChartWrapper>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Home;
