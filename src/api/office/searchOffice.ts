import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText?: string | undefined;
  clickPage: number;
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

export interface SearchOfficeResponse {
  recOffices: Array<OfficeInfoType>;
  totalPage: number;
}

export const searchOffices = (params: SearchOfficeParams) => {
  const { searchText = '' } = params;
  const { clickPage = 0 } = params;

  const size = 8;

  return instance.get<SearchOfficeResponse>(
    `/work/office/search/${clickPage}/${size}`,
    {
      params: { search: searchText },
    },
  );
};
