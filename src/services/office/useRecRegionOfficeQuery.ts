import { useQuery } from '@tanstack/react-query';
import {
  GetAllRecRegionOfficeParams,
  GetRecRegionOfficeParams,
  getRecAllRegionOffice,
  getRecRegionOffice,
} from '@/api/office/getOffice';

export const useRecRegionOfficeQuery = (params: GetRecRegionOfficeParams) =>
  useQuery({
    queryKey: ['office', params],
    queryFn: async () => {
      const response = await getRecRegionOffice(params);
      const { data } = response;
      const { recOffices } = data;

      return recOffices;
    },
    staleTime: 1000 * 20,
  });

export const useAllRecRegionOfficeQuery = (
  params: GetAllRecRegionOfficeParams,
) => {
  return useQuery({
    queryKey: ['officeAll', params],
    queryFn: async () => {
      const response = await getRecAllRegionOffice(params);
      const { data } = response;
      const { recOffices, totalPage } = data;

      return {
        recOffices,
        totalPage,
      };
    },
    staleTime: 1000 * 20,
  });
};
