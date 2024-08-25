import Image from 'next/image';
import { useState } from 'react';
import { OfficeAccordionProps } from '@/types/office.type';
import {
  OfficeAccordionContainer,
  OfficeAccordionContent,
  OfficeAccordionToggle,
} from './OfficeAccordion.styled';
import Badge from '@/components/Badge';
import PriceUnit from '@/components/PriceUnit';
import down_arrow from '../../../public/down-arrow.png';
import { OFFICE_INFO_TITLE, regionArr } from '@/constants/office';
import TitleContent from '../TitleContent';

function OfficeAccordion(props: OfficeAccordionProps) {
  const {
    placeName,
    placeAddress = '주소 미등록',
    allYearRound = '연중무휴',
    dayAndNight = '미등록',
    price = 0,
    priceUnit = '미정',
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <OfficeAccordionContainer>
      <OfficeAccordionToggle
        $isOpen={isOpen}
        onClick={(e) => {
          setIsOpen(!isOpen);
          e.stopPropagation();
        }}
      >
        <div id="core-info-container">
          <h3>{placeName}</h3>
          <div id="badge-container">
            <Badge text={allYearRound} />
            <Badge text={dayAndNight} />
          </div>
          <p id="place-address">{placeAddress}</p>
        </div>
        <div id="price-info-container">
          <PriceUnit price={price} unit={priceUnit} />
          <Image
            id="accordion-down-arrow"
            src={down_arrow}
            alt="아코디언 아래 화살표"
          />
        </div>
      </OfficeAccordionToggle>
      <OfficeAccordionContent $isOpen={isOpen}>
        <TitleContent title={OFFICE_INFO_TITLE.facility}>
          {regionArr.map((item) => (
            <Badge
              key={item.id}
              text={item.region}
              height="1.875rem"
              fontSize="1rem"
              padding="0.25rem 0.75rem"
              backgroundColor="var(--black-50)"
              color="var(--black-600)"
              borderRadius="1.75rem"
            />
          ))}
        </TitleContent>
        <TitleContent title={OFFICE_INFO_TITLE.capacity}>
          <p>1명~20명</p>
        </TitleContent>
        <TitleContent title={OFFICE_INFO_TITLE.operatingTime}>
          <p>월 00:00 ~ 24:00</p>
        </TitleContent>
      </OfficeAccordionContent>
    </OfficeAccordionContainer>
  );
}

export default OfficeAccordion;
