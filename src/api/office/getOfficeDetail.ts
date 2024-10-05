import { instance } from '../axios';

export interface GetOfficeDetailParams {
  officeId: number;
}

export interface FacilitiesInterface {
  twentyFourHoursOperation: boolean;
  openAllYear: boolean;
}

export interface OperatingTimeInterface {
  operatingHoursMonday: string;
  operatingHoursTuesday: string;
  operatingHoursWednesday: string;
  operatingHoursThursday: string;
  operatingHoursFriday: string;
  operatingHoursSaturday: string;
  operatingHoursSunday: string;
}

export interface GetOfficeDetailResponse {
  facilities: FacilitiesInterface;
  capacity: string;
  operatingTime: OperatingTimeInterface;
}

export const getOfficeDetail = (params: GetOfficeDetailParams) => {
  const { officeId } = params;

  return instance.get<GetOfficeDetailResponse>(
    `/work/office/detail/${officeId}`,
  );
};
