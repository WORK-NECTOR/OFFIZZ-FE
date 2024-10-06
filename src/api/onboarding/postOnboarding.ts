import { instance } from '../axios';

export interface PostOnboardingParams {
  reason: string;
  locate: string;
  address: string;
  startDate: string;
  endDate: string;
  startCoreTime: string;
  endCoreTime: string;
  workKeywords: Array<string>;
  vacationKeywords: Array<string>;
  goal: string;
  bucketlists: Array<BucketListType>;
  token: string;
}

export interface BucketListType {
  name: string;
  address: string;
}

export const postOnboarding = (params: PostOnboardingParams) => {
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

  return instance.post(
    '/onboarding',
    {
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
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
