import { TitleContentProps } from '@/types/titleContent.type';
import { TitleContentContainer } from './TitleContent.styled';

function TitleContent(props: TitleContentProps) {
  const { title, children } = props;

  return (
    <TitleContentContainer>
      <strong id="tc-title">{title}</strong>
      <div id="tc-content">{children}</div>
    </TitleContentContainer>
  );
}

export default TitleContent;
