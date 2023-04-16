import {
  CommentOutlined,
  HeartOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Card, Row, Typography } from 'antd';
import { type FC } from 'react';

const { Text } = Typography;

const Chart: FC = () => {
  return (
    <Card
      title="Chart title"
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
      {/* TODO */}
      <Row>Chart</Row>
    </Card>
  );
};

export default Chart;
