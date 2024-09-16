import { ProgressBarProps } from '@/types/progress.type';
import { StyledProgressBar } from './ProgressBar.styled';

function ProgressBar(props: ProgressBarProps) {
  const { width, current, total } = props;

  return (
    <StyledProgressBar
      max={100}
      value={(current / total) * 100}
      $width={width}
    />
  );
}

export default ProgressBar;
