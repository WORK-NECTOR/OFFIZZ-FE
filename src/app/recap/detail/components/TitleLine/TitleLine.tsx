import { TitleLineContainer } from './TitleLine.styled';

function TitleLine(props: { title: string }) {
  const { title } = props;

  return (
    <TitleLineContainer>
      <p>{title}</p>
    </TitleLineContainer>
  );
}

export default TitleLine;
