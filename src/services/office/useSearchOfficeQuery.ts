import { useQuery } from '@tanstack/react-query';
import { searchOffices } from '@/api/office/searchOffice';

export const useSearchOfficesQuery = (params: {
  searchText?: string;
  clickPage: number;
}) => {
  const { searchText } = params;
  const { clickPage } = params;

  return useQuery({
    queryKey: ['searchOffices', searchText],
    queryFn: async () => {
      const response = await searchOffices({ searchText, clickPage });
      const { data } = response;

      if (!data || !data.recOffices) {
        throw new Error('Invalid response data');
      }

      const { recOffices, totalPage } = data;

      return { offices: recOffices, totalPage };
    },
    staleTime: 1000 * 20,
  });
};
