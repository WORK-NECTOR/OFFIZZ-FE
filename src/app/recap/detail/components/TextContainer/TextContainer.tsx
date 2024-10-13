import { TextContainerWrapper } from './TextContainer.styled';

function TextContainer({ children }: { children: React.ReactNode }) {
  return <TextContainerWrapper>{children}</TextContainerWrapper>;
}

export default TextContainer;
