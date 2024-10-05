import { instance } from '../axios';

export interface GetOfficeDetailParams {
  officeId: number;
}

export interface FacilitiesInterface {
  heating: boolean;
  parking: boolean;
  publicLounge: boolean;
  sharedKitchen: boolean;
  waterPurifier: boolean;
  terraceRooftop: boolean;
  snacksDrinks: boolean;
  personalLocker: boolean;
  tvProject: boolean;
  whiteboard: boolean;
  internetWifi: boolean;
  showerFacility: boolean;
  storage: boolean;
  doorLock: boolean;
  powerOutlet: boolean;
  fax: boolean;
  twentyFourHoursOperation: boolean;
  openAllYear: boolean;
  airConditioning: boolean;
  cafeRestaurant: boolean;
  copierPrinter: boolean;
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
