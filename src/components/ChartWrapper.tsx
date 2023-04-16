import {
  CommentOutlined,
  HeartOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Card, Row, Typography } from 'antd';
import { type ReactNode, type FC } from 'react';

const { Text } = Typography;

type Props = {
  title: string;
  children: ReactNode;
  isLoading: boolean;
  error: Error | undefined;
};

// IDEA move rendering charts to Web Workers

const ChartWrapper: FC<Props> = ({ title, children, isLoading, error }) => {
  return (
    <Card
      title={title}
      size="default"
      actions={[
        <Avatar icon={<UserOutlined />} key="avatar" />,
        <Row align="middle" key="comments" justify="center">
          <Text style={{ marginRight: 5 }} type="secondary">
            (5)
          </Text>{' '}
          <CommentOutlined style={{ fontSize: 26 }} />
        </Row>,
        <HeartOutlined key="like" style={{ fontSize: 26 }} />
      ]}
    >
      {isLoading ? 'Loading...' : error ? error.message : children}
    </Card>
  );
};

export default ChartWrapper;
