import { OfficeAccordionProps } from '@/types/office.type';
import { OfficeAccordionContainer } from './OfficeAccordion.styled';
import Badge from '@/components/Badge';
import PriceUnit from '@/components/PriceUnit';

function OfficeAccordion(props: OfficeAccordionProps) {
  const {
    placeName,
    officeType = '분류없음',
    dayAndNight = '미등록',
    price = 0,
    priceUnit = '미정',
  } = props;

  return (
    <OfficeAccordionContainer>
      <h3>{placeName}</h3>
      <div id="badge-container">
        <Badge text={officeType} />
        <Badge text={dayAndNight} />
      </div>
      <PriceUnit price={price} unit={priceUnit} />
    </OfficeAccordionContainer>
  );
}

export default OfficeAccordion;
