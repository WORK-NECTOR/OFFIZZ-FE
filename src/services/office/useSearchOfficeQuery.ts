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
    queryKey: ['searchOffices', searchText, clickPage, activeCategory],
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

      if (!data) {
        throw new Error('Invalid response data');
      }
      if (activeToggle === 'vacation') {
        const { vacationRecommendResponses, totalPage } = data;
        return { serchData: vacationRecommendResponses, totalPage };
      }
      const { cafeAndOffices, totalPage } = data;
      return { serchData: cafeAndOffices, totalPage };
    },
    staleTime: 1000 * 20,
  });
};
