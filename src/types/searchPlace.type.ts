export type SearchPlaceType = {
  address_name: string;
  place_name: string;
};

export interface LocationItemProps extends SearchPlaceType {
  setPlace: (place: string) => void;
}
