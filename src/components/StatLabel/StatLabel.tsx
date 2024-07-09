import { StatLabelProps } from '@/types/statLabel.type';
import { StatLabelContainer } from './StatLabel.styled';

function StatLabel(props: StatLabelProps) {
  const { stat, desc } = props;

  return (
    <StatLabelContainer>
      <h2>{stat}</h2>
      <p>{desc}</p>
    </StatLabelContainer>
  );
}

export default StatLabel;
