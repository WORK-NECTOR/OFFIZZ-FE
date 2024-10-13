import { useQuery } from '@tanstack/react-query';
import {
  GetRecapDetailParams,
  getRecapDetail,
} from '@/api/recap/getRecapDetail';

export const useRecapDetailQuery = (params: GetRecapDetailParams) => {
  const { workationId, token } = params;

  return useQuery({
    queryKey: ['recap-detail', params],
    queryFn: async () => {
      const response = await getRecapDetail({
        workationId,
        token,
      });
      const { data } = response;
      const {
        zeroPage,
        firstPage,
        secondPage,
        thirdPage,
        fourthPage,
        fifthPage,
        sixthPage,
        seventhPage,
      } = data;

      return {
        zeroPage,
        firstPage,
        secondPage,
        thirdPage,
        fourthPage,
        fifthPage,
        sixthPage,
        seventhPage,
      };
    },
    enabled: false,
  });
};
