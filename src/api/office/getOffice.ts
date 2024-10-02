import { instance } from '../axios';

export interface GetRecRegionOfficeParams {
  region: string; // available한 값만 들어오게 수정 예정
  size: number;
}

export interface GetAllRecRegionOfficeParams extends GetRecRegionOfficeParams {
  page: number;
}

export interface OfficeInfoType {
  officeId: number;
  name: string;
  facilities: {
    twentyFourHoursOperation: boolean;
    openAllYear: boolean;
  };
  address: string;
  price: number;
  priceType: string;
}

export interface GetOfficeResponse {
  recOffices: Array<OfficeInfoType>;
}

export interface GetAllOfficeResponse extends GetOfficeResponse {
  totalPage: number;
}

export const getRecRegionOffice = (params: GetRecRegionOfficeParams) => {
  const { region = '수도권', size = 4 } = params;

  return instance.get<GetOfficeResponse>(`/work/office/rec/${region}/${size}`);
};

export const getRecAllRegionOffice = (params: GetAllRecRegionOfficeParams) => {
  const { region = '수도권', size = 8, page = 1 } = params;

  return instance.get<GetAllOfficeResponse>(
    `/work/office/rec/all/${region}/${page}/${size}`,
  );
};
