import { instance } from '../axios';

export interface GetOngoingWorkationParams {
  token: string;
}

export const getOngoingWorkation = (params: GetOngoingWorkationParams) => {
  const { token } = params;

  return instance.get(`/user/workation/ongoing`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
