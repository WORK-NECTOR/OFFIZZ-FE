import Image from 'next/image';
import { useEffect, useState } from 'react';
import { OfficeAccordionProps } from '@/types/office.type';
import {
  OfficeAccordionContainer,
  OfficeAccordionContent,
  OfficeAccordionToggle,
} from './OfficeAccordion.styled';
import Badge from '@/components/Badge';
import PriceUnit from '@/components/PriceUnit';
import down_arrow from '../../../public/down-arrow.png';
import {
  FACILITY_TEXT,
  OFFICE_INFO_TITLE,
  OPERATING_TIME_DAY,
  regionArr,
} from '@/constants/office';
import TitleContent from '../TitleContent';
import { useOfficeDetailQuery } from '@/services/office/useOfficeDetailQuery';
import {
  FacilitiesInterface,
  OperatingTimeInterface,
} from '@/api/office/getOfficeDetail';

function OfficeAccordion(props: OfficeAccordionProps) {
  const {
    placeName,
    placeAddress = '주소 미등록',
    allYearRound,
    dayAndNight,
    price = 0,
    priceUnit = '미정',
    officeId,
  } = props;
  const { data } = useOfficeDetailQuery({
    officeId,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [facilitiesArr, setFacilitiesArr] = useState<Array<string>>([]);

  useEffect(() => {
    function getAvailableFacilities(facilities: FacilitiesInterface): string[] {
      return Object.keys(facilities)
        .filter((key) => facilities[key as keyof FacilitiesInterface])
        .map((key) => FACILITY_TEXT[key as keyof typeof FACILITY_TEXT])
        .filter(Boolean);
    }

    if (data) {
      setFacilitiesArr(getAvailableFacilities(data.facilities));
    }
  }, [data]);

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
            {allYearRound && <Badge text="연중무휴" />}
            {dayAndNight && <Badge text="24시 운영" />}
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
          {facilitiesArr &&
            facilitiesArr.map((item, idx) => (
              <Badge
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                text={item}
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
          <p>{data && data.capacity}</p>
        </TitleContent>
        <TitleContent title={OFFICE_INFO_TITLE.operatingTime}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data &&
              Object.keys(data.operatingTime).map((el, idx) => (
                <p
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                >{`${OPERATING_TIME_DAY[el]} ${data.operatingTime[el as keyof OperatingTimeInterface]}`}</p>
              ))}
          </div>
        </TitleContent>
      </OfficeAccordionContent>
    </OfficeAccordionContainer>
  );
}

export default OfficeAccordion;
