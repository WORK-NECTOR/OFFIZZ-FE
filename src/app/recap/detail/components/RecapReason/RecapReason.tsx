import { RECAP_DETAIL_TITLE } from '@/constants/recap';
import BackNextBtn from '../BackNextBtn';
import TitleLine from '../TitleLine';
import { RecapReasonContainer } from './RecapReason.styled';

function RecapReason() {
  return (
    <RecapReasonContainer>
      <TitleLine title={RECAP_DETAIL_TITLE.reason} />
      <BackNextBtn />
    </RecapReasonContainer>
  );
}

export default RecapReason;
