import { Layout, Space, Typography } from 'antd';
import { type FC } from 'react';

const { Header: HeaderAnt } = Layout;
const { Text } = Typography;

const Header: FC = () => (
  <HeaderAnt
    style={{
      backgroundColor: '#fff',
      boxShadow: '5px 4px 8px #888888',
      zIndex: 1
    }}
  >
    <Text strong>MSD Example App</Text>
  </HeaderAnt>
);

export default Header;
