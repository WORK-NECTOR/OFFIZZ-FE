import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText?: string | undefined;
  page?: number;
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

export const searchWorkOffices = (params: SearchOfficeParams) => {
  const { searchText = '', page = 1, size = 8 } = params;

  return instance.get<SearchOfficeResponse>(
    `/work/office/search/${page}/${size}`,
    {
      params: { search: searchText },
    },
  );
};
