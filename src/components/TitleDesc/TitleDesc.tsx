import { TitleDescProps } from '@/types/titleDesc.type';
import { TitleDescContainer } from './TitleDesc.styled';

function TitleDesc(props: TitleDescProps) {
  return (
    <TitleDescContainer $sort={props.sort}>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </TitleDescContainer>
  );
}

export default TitleDesc;
