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
        firstPage,
        secondPage,
        thirdPage,
        fourthPage,
        fifthPage,
        sixthPage,
        seventhPage,
        eighthPage,
      } = data;

      return {
        firstPage,
        secondPage,
        thirdPage,
        fourthPage,
        fifthPage,
        sixthPage,
        seventhPage,
        eighthPage,
      };
    },
    enabled: false,
  });
};
