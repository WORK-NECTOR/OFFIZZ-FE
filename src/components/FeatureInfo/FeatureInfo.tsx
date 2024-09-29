import { FeatureInfoProps } from '@/types/feature.type';
import { FeatureInfoContainer } from './FeatureInfo.styled';

function FeatureInfo(props: FeatureInfoProps) {
  const { title, desc } = props;

  return <FeatureInfoContainer></FeatureInfoContainer>;
}

export default FeatureInfo;
