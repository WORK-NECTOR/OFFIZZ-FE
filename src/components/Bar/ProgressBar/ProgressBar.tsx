import { ProgressBarProps } from '@/types/progress.type';
import {
  ProgressBarContainer,
  ProgressStep,
  StyledProgressBar,
} from './ProgressBar.styled';

function ProgressBar(props: ProgressBarProps) {
  const { width, current, total } = props;

  return (
    <ProgressBarContainer>
      <StyledProgressBar
        max={100}
        value={(current / total) * 100}
        $width={width}
      />
      <ProgressStep>
        {current}/{total}
      </ProgressStep>
    </ProgressBarContainer>
  );
}

export default ProgressBar;
