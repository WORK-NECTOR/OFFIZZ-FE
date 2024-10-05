import {
  GetOfficeDetailParams,
  getOfficeDetail,
} from '@/api/office/getOfficeDetail';
import { useQuery } from '@tanstack/react-query';

export const useOfficeDetailQuery = (params: GetOfficeDetailParams) => {
  const { officeId } = params;

  return useQuery({
    queryKey: ['office-detail', officeId],
    queryFn: async () => {
      const response = await getOfficeDetail(params);
      const { data } = response;
      const { facilities, capacity, operatingTime } = data;

      return { facilities, capacity, operatingTime };
    },
    staleTime: 1000 * 20,
  });
};
