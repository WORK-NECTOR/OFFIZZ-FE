import {
  GetOngoingWorkationParams,
  getOngoingWorkation,
} from '@/api/workation/getOngoing';
import { useQuery } from '@tanstack/react-query';

export const useOngoingWorkationQuery = (params: GetOngoingWorkationParams) => {
  const { token } = params;

  return useQuery({
    queryKey: ['ongoing-workation'],
    queryFn: async () => {
      const response = await getOngoingWorkation(params);
      const { data } = response;

      return { data };
    },
    staleTime: 1000 * 20,
    enabled: false,
  });
};
