import { SearchPlaceType } from '@/types/searchPlace.type';
import { LocationItemWraper } from './LocationItem.styled';

function LocationItem(props: SearchPlaceType) {
  const { address_name, place_name } = props;
  return <LocationItemWraper>Test</LocationItemWraper>;
}

export default LocationItem;
