import {
  PostOnboardingParams,
  postOnboarding,
} from '@/api/onboarding/postOnboarding';
import { useQuery } from '@tanstack/react-query';

export const useOnboardingQuery = (params: PostOnboardingParams) => {
  const {
    reason,
    locate,
    address,
    startDate,
    endDate,
    startCoreTime,
    endCoreTime,
    workKeywords,
    vacationKeywords,
    goal,
    bucketlists,
    token,
  } = params;

  return useQuery({
    queryKey: ['onboarding', params],
    queryFn: async () => {
      const response = await postOnboarding({
        reason,
        locate,
        address,
        startDate,
        endDate,
        startCoreTime,
        endCoreTime,
        workKeywords,
        vacationKeywords,
        goal,
        bucketlists,
        token,
      });
      const { data, status } = response;

      return { code: status, workationId: data };
    },
    enabled: false,
  });
};
