
import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText?: string |undefined;
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

  const page = 1;
  const size = 8;

  return instance.get<SearchOfficeResponse>(`/office/search/${page}/${size}`, {
    params: { search: searchText },
  });
};
