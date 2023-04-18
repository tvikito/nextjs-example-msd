import { CommentOutlined, UserOutlined } from "@ant-design/icons"
import { Avatar, Card, Row, Typography } from "antd"
import { type FC } from "react"

import Chart, { type ChartProps } from "./Chart"
import FavoriteChart from "./FavoriteChart"

const { Text } = Typography

type Props = ChartProps & {
  title: string
  chartId: string
  error: Error | undefined
}

// IDEA move rendering charts to Web Workers

const ChartWrapper: FC<Props> = ({ title, chartId, error, ...chartProps }) => {
  return (
    <Card
      title={title}
      size="default"
      actions={[
        <Avatar icon={<UserOutlined />} key="avatar" />,
        <Row align="middle" key="comments" justify="center">
          <Text style={{ marginRight: 5 }} type="secondary">
            (5)
          </Text>{" "}
          <CommentOutlined style={{ fontSize: 26 }} />
        </Row>,
        <FavoriteChart key="like" chartId={chartId} />,
      ]}
    >
      {error ? error.message : <Chart {...chartProps} />}
    </Card>
  )
}

export default ChartWrapper
