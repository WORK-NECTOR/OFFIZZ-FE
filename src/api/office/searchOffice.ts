import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText?: string | undefined;
  clickPage?: number;
  size?: number;
  filter: '';
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
  const { searchText = '', clickPage = 1, size = 8, filter = '' } = params;

  return instance.get<SearchOfficeResponse>(
    `/work/${filter}/location/${clickPage}/${size}`,
    {
      params: { search: searchText },
    },
  );
};
