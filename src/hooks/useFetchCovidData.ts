import useSWR from 'swr';

export type CovidData = {
  date: string;
  area: string;
  newCases: number;
  cumCases: number;
}[];

const fetcher = (url: string) =>
  fetch(url)
    .then((r) => r.json())
    .then((r: { data: CovidData }) => r.data);

export const useFetchCovidData = () => {
  const AreaType = 'nation';

  const filters = [`areaType=${AreaType}`];
  const structure = {
    date: 'date',
    area: 'areaName',
    newCases: 'newCasesByPublishDate',
    cumCases: 'cumCasesByPublishDate'
  };

  const apiParams = new URLSearchParams({
    filters: filters.join(';'),
    structure: JSON.stringify(structure)
  });

  const url = `https://api.coronavirus.data.gov.uk/v1/data?${apiParams.toString()}`;
  const { data, error, isLoading } = useSWR<CovidData, Error>(url, fetcher);

  return {
    data,
    isLoading,
    error
  };
};
