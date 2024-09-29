import { FeatureInfoProps } from '@/types/feature.type';
import {
  DottedLine,
  EnTitleDesc,
  FeatureInfoContainer,
} from './FeatureInfo.styled';
import Image from 'next/image';
import line from 'public/dotted-line.svg';

function FeatureInfo(props: FeatureInfoProps) {
  const { title, desc } = props;

  return (
    <FeatureInfoContainer>
      <DottedLine>
        <Image src={line} alt="점선" />
        <div></div>
      </DottedLine>
      <EnTitleDesc>
        <h3>{title}</h3>
        <p>{desc}</p>
      </EnTitleDesc>
    </FeatureInfoContainer>
  );
}

export default FeatureInfo;
