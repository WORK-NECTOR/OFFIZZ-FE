import { PriceUnitProps } from '@/types/priceUnit.type';
import { PriceUnitContainer } from './PriceUnit.styled';

function PriceUnit(props: PriceUnitProps) {
  const { price, unit } = props;

  return (
    <PriceUnitContainer>
      <span id="price">{price.toLocaleString()}원&nbsp;</span>
      <span id="unit">/&nbsp;{unit}</span>
    </PriceUnitContainer>
  );
}

export default PriceUnit;
