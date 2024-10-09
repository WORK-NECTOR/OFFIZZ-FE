import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText?: string | undefined;
  clickPage?: number;
  size?: number;
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
  const { searchText = '', clickPage = 1, size = 8 } = params;

  return instance.get<SearchOfficeResponse>(
    `/work/office/search/${clickPage}/${size}`,
    {
      params: { search: searchText },
    },
  );
};
