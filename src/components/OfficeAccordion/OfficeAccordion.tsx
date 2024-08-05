import { OfficeAccordionProps } from '@/types/office.type';
import { OfficeAccordionContainer } from './OfficeAccordion.styled';
import Badge from '@/components/Badge';
import PriceUnit from '@/components/PriceUnit';

function OfficeAccordion(props: OfficeAccordionProps) {
  const {
    placeName,
    allYearRound = '연중무휴',
    dayAndNight = '미등록',
    price = 0,
    priceUnit = '미정',
  } = props;

  return (
    <OfficeAccordionContainer>
      <h3>{placeName}</h3>
      <div id="badge-container">
        <Badge text={allYearRound} />
        <Badge text={dayAndNight} />
      </div>
      <PriceUnit price={price} unit={priceUnit} />
    </OfficeAccordionContainer>
  );
}

export default OfficeAccordion;
