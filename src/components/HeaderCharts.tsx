import {
  AlignLeftOutlined,
  ControlOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { Badge, Button, Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;

const HeaderCharts: React.FC = () => {
  const dynamicNotesNumber = 3;
  const dynamicFilterNumber = 8;

  return (
    <Row
      style={{ paddingTop: 15, paddingBottom: 15 }}
      align="middle"
      justify="space-between"
      gutter={[10, 12]}
    >
      <Col>
        <Title style={{ fontSize: 19, marginBottom: 0 }}>Charts page</Title>
      </Col>
      <Col>
        <Row align="middle" gutter={[16, 12]}>
          <Col sm={{ flex: 1 }}>
            <Button size="large">
              Export to PDF <DownloadOutlined style={{ color: '#058473' }} />
            </Button>
          </Col>
          <Col sm={{ flex: 1 }}>
            <Button size="large">
              Notes{' '}
              <Text type="secondary" style={{ marginLeft: 5 }}>
                ({dynamicNotesNumber})
              </Text>{' '}
              <AlignLeftOutlined style={{ color: '#058473' }} />
            </Button>
          </Col>
          <Col sm={{ flex: 1 }}>
            <Button size="large">
              <Text>Filter</Text>
              <Badge
                count={dynamicFilterNumber}
                style={{
                  backgroundColor: '#058473',
                  marginLeft: 5,
                  marginTop: -3
                }}
              />
              <ControlOutlined style={{ color: '#058473' }} />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderCharts;
