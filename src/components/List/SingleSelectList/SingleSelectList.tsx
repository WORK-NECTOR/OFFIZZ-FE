import { SingleSelectListProps } from '@/types/list.type';
import { ListContainer } from './SingleSelectList.styled';
import IconTitle from '@/components/IconTitle';

function SingleSelectList(props: SingleSelectListProps) {
  const { listArr, selectFunc } = props;

  return (
    <ListContainer>
      {listArr.length > 0 &&
        listArr.map((el, idx) => (
          <li key={idx}>
            <IconTitle icon={el.icon} title={el.title} />
          </li>
        ))}
    </ListContainer>
  );
}

export default SingleSelectList;
