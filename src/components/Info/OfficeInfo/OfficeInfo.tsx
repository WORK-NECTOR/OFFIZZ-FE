import { OfficeInfoProps } from '@/types/info/officeInfo.type';
import { OfficeInfoContainer } from './OfficeInfo.styled';

function OfficeInfo(props: OfficeInfoProps) {
  const {
    placeName,
    officeType = '분류없음',
    dayAndNight = '미등록',
    price = '가격미정',
    priceUnit = '미정',
  } = props;

  return (
    <OfficeInfoContainer>
      <h3>{placeName}</h3>
    </OfficeInfoContainer>
  );
}

export default OfficeInfo;
