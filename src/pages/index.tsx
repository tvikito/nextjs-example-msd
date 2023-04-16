import { Col, Layout, Row } from 'antd';
import { type NextPage } from 'next';
import Head from 'next/head';
import Chart from '~/components/Chart';
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
            <Chart />
          </Col>
          <Col span={24} lg={12}>
            <Chart />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Home;
