import { useQuery } from '@tanstack/react-query';
import {
  GetRecRegionOfficeParams,
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
