import { StatefulTitleDescProps } from '@/types/statefulTitleDesc.type';
import { StatefulTitleDescContainer } from './StatefulTitleDesc.styled';

function StatefulTitleDesc(props: StatefulTitleDescProps) {
  const { title, desc, state } = props;

  return (
    <StatefulTitleDescContainer $state={state}>
      <p id="stateful-title">{title}</p>
      <p id="stateful-desc">{desc}</p>
    </StatefulTitleDescContainer>
  );
}

export default StatefulTitleDesc;
