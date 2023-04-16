import { HeartOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { type FC } from 'react';
import { api } from '~/utils/api';

type FavoriteChartProps = {
  chartId: string;
};

const FavoriteChart: FC<FavoriteChartProps> = ({ chartId }) => {
  const utils = api.useContext();

  const {
    data: favoriteData,
    isRefetching,
    isLoading
  } = api.charts.getFavorite.useQuery({
    id: chartId
  });
  const isFavorite = favoriteData?.isFavorite;

  const { mutate: mutateFavorite, isLoading: isMutating } =
    api.charts.setFavorite.useMutation({
      onSuccess({ id }) {
        void utils.charts.getFavorite.invalidate({ id });
      }
    });

  const toggleFavorite = () => {
    mutateFavorite({
      id: chartId,
      isFavorite: !isFavorite
    });
    // void refetchFavoriteChart();
  };

  return (
    <Spin spinning={isRefetching || isLoading || isMutating}>
      <HeartOutlined
        style={{
          fontSize: 26,
          ...(isFavorite ? { color: 'red' } : {})
        }}
        onClick={toggleFavorite}
      />
    </Spin>
  );
};

export default FavoriteChart;
