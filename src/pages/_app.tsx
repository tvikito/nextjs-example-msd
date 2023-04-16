import '~/styles/globals.css';
import '~/styles/reset.css';
import CustomHead from '../components/CustomHead';
import { type AppProps } from 'next/app';
import { type FC } from 'react';
import Head from 'next/head';
import { ConfigProvider, Layout } from 'antd';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { api } from '~/utils/api';

const { Content } = Layout;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <CustomHead />
      </Head>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#058473'
          }
        }}
      >
        <Layout>
          <Header />

          <Content className="bg-gray">
            <Component {...pageProps} />
          </Content>

          <Footer />
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
