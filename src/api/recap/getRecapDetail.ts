import { instance } from '../axios';

export interface GetRecapDetailParams {
  workationId: number;
  token: string;
}

export interface RecapDetailResponseType {
  firstPage: FirstPageType;
  secondPage: SecondPageType;
  thirdPage: ThirdPageType;
  fourthPage: FourthPageType;
  fifthPage: FifthPageType;
  sixthPage: SixthPageType;
  seventhPage: SeventhPageType;
  eighthPage: EighthPageType;
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
  bestWorkDays: Array<string>;
}

export interface SixthPageType {
  totalVacation: number;
  averageRate: number;
}

export interface SeventhPageType {
  bestVacationDays: Array<string>;
}

export interface EighthPageType {
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
