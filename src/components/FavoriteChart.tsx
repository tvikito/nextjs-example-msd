import { HeartOutlined } from '@ant-design/icons';
import { type FC } from 'react';
import { api } from '~/utils/api';

type FavoriteChartProps = {
  chartId: string;
};

const FavoriteChart: FC<FavoriteChartProps> = ({ chartId }) => {
  const utils = api.useContext();

  const { data: favoriteData } = api.charts.isFavorite.useQuery({
    id: chartId
  });

  const isFavorite = favoriteData?.isFavorite;

  const { mutate: mutateFavorite } = api.charts.setFavorite.useMutation({
    async onMutate(favoriteData) {
      // Cancel outgoing fetches (so they don't overwrite our optimistic update)
      await utils.charts.isFavorite.cancel({ id: favoriteData.id });

      // Get the data from the queryCache
      const prevData = utils.charts.isFavorite.getData({
        id: favoriteData.id
      });

      // Optimistically update the data with our new post
      utils.charts.isFavorite.setData({ id: favoriteData.id }, favoriteData);

      // Return the previous data so we can revert if something goes wrong
      return { prevData };
    },
    onError(err, favoriteData, ctx) {
      // If the mutation fails, use the context-value from onMutate
      utils.charts.isFavorite.setData({ id: favoriteData.id }, ctx?.prevData);
    },
    onSettled(favoriteData) {
      // Sync with server once mutation has settled
      if (favoriteData) {
        void utils.charts.isFavorite.invalidate({
          id: favoriteData.id
        });
      }
    }
  });

  const toggleFavorite = () => {
    mutateFavorite({
      id: chartId,
      isFavorite: !isFavorite
    });
  };

  return (
    <HeartOutlined
      style={{
        fontSize: 26,
        ...(isFavorite ? { color: 'red' } : {})
      }}
      onClick={toggleFavorite}
    />
  );
};

export default FavoriteChart;
