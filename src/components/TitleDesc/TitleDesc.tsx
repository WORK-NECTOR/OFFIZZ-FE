import { TitleDescProps } from '@/types/titleDesc.type';
import { RecapTitleDescContainer, TitleDescContainer } from './TitleDesc.styled';
import { type } from 'os';

function TitleDesc(props: TitleDescProps) {
  const { sort, title, desc ,type } = props;
  const Container = type === 'recap' ? RecapTitleDescContainer : TitleDescContainer;
  return (
    <Container $sort={sort} $type={type}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Container>
  );
}

export default TitleDesc;
