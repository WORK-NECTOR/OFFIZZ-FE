import { useQuery } from '@tanstack/react-query';
import { searchOffices } from '@/api/office/searchOffice';

export const useSearchOfficesQuery = (params: {
  searchText?: string;
  page: number;
}) => {
  const { searchText } = params;
  const { page } = params;

  return useQuery({
    queryKey: ['searchOffices', searchText],
    queryFn: async () => {
      const response = await searchOffices({ searchText, page });
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
