import { useQuery } from '@tanstack/react-query';
import { SearchOfficeParams, searchOffices } from '@/api/office/searchOffice';

export const useSearchOfficesQuery = (params: SearchOfficeParams) => {
  const {
    searchText,
    clickPage,
    activeCategory,
    userLat,
    userLng,
    activeToggle,
  } = params;

  return useQuery({
    queryKey: ['searchOffices', searchText, clickPage],
    queryFn: async () => {
      const response = await searchOffices({
        searchText,
        clickPage,
        activeCategory,
        userLng,
        userLat,
        activeToggle,
      });

      const { data } = response;

      if (!data || !data.cafeAndOffices) {
        throw new Error('Invalid response data');
      }

      const { cafeAndOffices, totalPage } = data;

      return { serchData: cafeAndOffices, totalPage };
    },
    staleTime: 1000 * 20,
  });
};
