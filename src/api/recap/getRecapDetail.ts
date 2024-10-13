import { instance } from '../axios';

export interface GetRecapDetailParams {
  workationId: number;
  token: string;
}

export interface RecapDetailResponseType {
  zeroPage: ZeroPageType;
  firstPage: FirstPageType;
  secondPage: SecondPageType;
  thirdPage: ThirdPageType;
  fourthPage: FourthPageType;
  fifthPage: FifthPageType;
  sixthPage: SixthPageType;
  seventhPage: SeventhPageType;
}

export interface ZeroPageType {
  name: string;
  address: string;
  startDate: string;
  endDate: string;
}

export interface FirstPageType {
  reason: string;
}

export interface SecondPageType {
  totalTime: number;
  startTime: string;
  endTime: string;
  averageTime: number;
}

export interface ThirdPageType {
  rate: number;
}

export interface FourthPageType {
  passionDate: string;
  diff: number;
}

export interface FifthPageType {
  totalVacation: number;
  averageRate: number;
}

export interface SixthPageType {
  rate: number;
}

export interface SeventhPageType {
  bestVacations: Array<VacationType>;
}

export interface VacationType {
  date: string;
  name: string;
}

export const getRecapDetail = (params: GetRecapDetailParams) => {
  const { workationId, token } = params;

  return instance.get(`/entire/recap/${workationId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
