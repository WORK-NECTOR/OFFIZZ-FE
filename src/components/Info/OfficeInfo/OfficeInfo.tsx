import { OfficeInfoProps } from '@/types/info/officeInfo.type';
import { OfficeInfoContainer } from './OfficeInfo.styled';
import Badge from '@/components/Badge';
import PriceUnit from '@/components/PriceUnit';

function OfficeInfo(props: OfficeInfoProps) {
  const {
    placeName,
    officeType = '분류없음',
    dayAndNight = '미등록',
    price = 0,
    priceUnit = '미정',
  } = props;

  return (
    <OfficeInfoContainer>
      <h3>{placeName}</h3>
      <div id="badge-container">
        <Badge text={officeType} />
        <Badge text={dayAndNight} />
      </div>
      <PriceUnit price={price} unit={priceUnit} />
    </OfficeInfoContainer>
  );
}

export default OfficeInfo;
