import { SingleSelectListProps } from '@/types/list.type';
import { ListContainer, ListEl } from './SingleSelectList.styled';
import IconTitle from '@/components/IconTitle';
import { useState } from 'react';

function SingleSelectList(props: SingleSelectListProps) {
  const { listArr, selectFunc } = props;
  const [selected, setSelected] = useState('');

  function handleClick(title: string) {
    setSelected(title);
    selectFunc(title);
  }

  return (
    <ListContainer>
      {listArr.length > 0 &&
        listArr.map((el, idx) => (
          <ListEl
            key={idx}
            onClick={() => handleClick(el.title)}
            $selected={selected === el.title}
          >
            <IconTitle icon={el.icon} title={el.title} />
          </ListEl>
        ))}
    </ListContainer>
  );
}

export default SingleSelectList;
