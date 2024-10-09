import useAuth from '@/hook/useAuth';
import { instance } from '../axios';

export interface SearchOfficeParams {
  searchText: string;
  clickPage: number;
  activeCategory: string;
  userLng: number;
  userLat: number;
}

export interface serchMapInfoType {
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
  cafeAndOffices: Array<serchMapInfoType>;
  totalPage: number;
}

export const searchOffices = async (params: SearchOfficeParams) => {
  const { searchText, clickPage, activeCategory, userLng, userLat } = params;
  const { getAccessToken } = useAuth();
  const size = 8;

  try {
    const token = await getAccessToken();

    return await instance.get<SearchOfficeResponse>(
      `/work/${activeCategory}/location/${clickPage}/${size}`,
      {
        params: { search: searchText, lat: userLat, lon: userLng },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    throw error;
  }
};
