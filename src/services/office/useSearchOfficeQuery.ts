import { useQuery } from '@tanstack/react-query';
import { SearchOfficeParams, searchOffices } from '@/api/office/searchOffice';

export const useSearchOfficesQuery = (params: SearchOfficeParams) => {
  const { searchText, clickPage, size, activeCategory } = params;

  return useQuery({
    queryKey: ['searchOffices', searchText, clickPage],
    queryFn: async () => {
      const response = await searchOffices({
        searchText,
        clickPage,
        size,
        activeCategory,
      });

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
