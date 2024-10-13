import { useQuery } from '@tanstack/react-query';
import {
  GetOngoingWorkationParams,
  getOngoingWorkation,
} from '@/api/workation/getOngoing';

export const useOngoingWorkationQuery = (params: GetOngoingWorkationParams) => useQuery({
    queryKey: ['ongoing-workation'],
    queryFn: async () => {
      const response = await getOngoingWorkation(params);
      const { data } = response;

      return { data };
    },
    staleTime: 1000 * 20,
    enabled: false,
  });
