import Image from 'next/image';
import { LocationItemProps } from '@/types/searchPlace.type';
import { LocationItemWraper, LocationTextWrapper } from './LocationItem.styled';
import ic_loc from '../../../public/ic-location.png';

function LocationItem(props: LocationItemProps) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    address_name,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    place_name,
    setPlace,
    setAddress,
    searchBarType,
    setVisitPlace,
    visitPlace,
  } = props;

  return (
    <LocationItemWraper
      onClick={() => {
        if (searchBarType === 'place') {
          setPlace(place_name);
          setAddress(address_name);
        }
        if (searchBarType === 'visit') {
          setVisitPlace([
            ...visitPlace,
            {
              address_name,
              place_name,
            },
          ]);
        }
      }}
    >
      <Image src={ic_loc} alt="위치 아이콘" />
      <LocationTextWrapper>
        <h3>{place_name}</h3>
        <p>{address_name}</p>
      </LocationTextWrapper>
    </LocationItemWraper>
  );
}

export default LocationItem;
