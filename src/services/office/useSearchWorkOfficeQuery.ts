import { useQuery } from '@tanstack/react-query';
import {
  SearchOfficeParams,
  searchWorkOffices,
} from '@/api/office/searchWorkOffice';

export const useSearchWorkOfficesQuery = (params: SearchOfficeParams) => {
  const { searchText, page, size } = params;

  return useQuery({
    queryKey: ['searchOffices', searchText, page],
    queryFn: async () => {
      const response = await searchWorkOffices({ searchText, page, size });
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
