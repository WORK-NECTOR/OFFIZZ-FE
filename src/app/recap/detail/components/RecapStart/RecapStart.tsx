import { TOP_MAIN } from '@/constants/main';
import TitleLine from '../TitleLine';
import { RecapStartContainer } from './RecapStart.styled';

function RecapStart() {
  return (
    <RecapStartContainer>
      <TitleLine title={TOP_MAIN.name} />
    </RecapStartContainer>
  );
}

export default RecapStart;
