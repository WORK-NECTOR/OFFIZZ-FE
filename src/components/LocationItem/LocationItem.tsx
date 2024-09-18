import { SearchPlaceType } from '@/types/searchPlace.type';
import { LocationItemWraper, LocationTextWrapper } from './LocationItem.styled';
import Image from 'next/image';
import ic_loc from '../../../public/ic-location.png';

function LocationItem(props: SearchPlaceType) {
  const { address_name, place_name } = props;
  return (
    <LocationItemWraper>
      <Image src={ic_loc} alt="위치 아이콘" />
      <LocationTextWrapper>
        <h3>{place_name}</h3>
        <p>{address_name}</p>
      </LocationTextWrapper>
    </LocationItemWraper>
  );
}

export default LocationItem;
