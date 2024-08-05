import { OfficeAccordionProps } from '@/types/office.type';
import { OfficeAccordionContainer } from './OfficeAccordion.styled';
import Badge from '@/components/Badge';
import PriceUnit from '@/components/PriceUnit';
import Image from 'next/image';
import down_arrow from '../../../public/down-arrow.png';

function OfficeAccordion(props: OfficeAccordionProps) {
  const {
    placeName,
    placeAddress = '주소 미등록',
    allYearRound = '연중무휴',
    dayAndNight = '미등록',
    price = 0,
    priceUnit = '미정',
  } = props;

  return (
    <OfficeAccordionContainer>
      <div id="core-info-container">
        <h3>{placeName}</h3>
        <div id="badge-container">
          <Badge text={allYearRound} />
          <Badge text={dayAndNight} />
        </div>
        <p>{placeAddress}</p>
      </div>
      <div id="price-info-container">
        <PriceUnit price={price} unit={priceUnit} />
        <Image
          id="accordion-down-arrow"
          src={down_arrow}
          alt="아코디언 아래 화살표"
        />
      </div>
    </OfficeAccordionContainer>
  );
}

export default OfficeAccordion;
