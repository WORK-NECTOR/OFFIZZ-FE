import useAuth from '@/hook/useAuth';
import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText: string;
  clickPage: number;
  activeCategory: string;
  userLng: number;
  userLat: number;
  activeToggle: string;
}

export interface SearchMapInfoType {
  address: string;
  category: string;
  image: string;
  id: number;
  isLike: boolean;
  lat: number;
  lon: number;
  name: string;
}

export interface SearchOfficeResponse {
  cafeAndOffices: Array<SearchMapInfoType>;
  totalPage: number;
}

export const searchOffices = async (params: SearchOfficeParams) => {
  // eslint-disable-next-line
  const { getAccessToken } = useAuth();
  const {
    searchText,
    clickPage,
    activeCategory,
    userLng,
    userLat,
    activeToggle,
  } = params;
  const size = 8;

  const token = await getAccessToken();
  const url =
    activeToggle === 'vacation'
      ? `/vacation/recommend/${activeCategory}/location/${clickPage}/${size}`
      : `/work/${activeCategory}/location/${clickPage}/${size}`;

  return instance.get<SearchOfficeResponse>(url, {
    params: { search: searchText, lat: userLat, lon: userLng },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
