import { MultiSelectListProps } from '@/types/list.type';
import { ListContainer, ListEl } from './MultiSelectList.styled';
import IconTitle from '@/components/IconTitle';
import { useState } from 'react';

function MultiSelectList(props: MultiSelectListProps) {
  const { listArr, selectFunc } = props;
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  function handleClick(title: string, keyName: string) {
    if (selectedTitles.includes(title)) {
      setSelectedTitles(selectedTitles.filter((item) => item !== title));
      setSelectedKeys(selectedKeys.filter((key) => key !== keyName));
    } else {
      setSelectedTitles([...selectedTitles, title]);
      setSelectedKeys([...selectedKeys, keyName]);
    }
    selectFunc([...selectedKeys, keyName]);
  }

  return (
    <ListContainer>
      {listArr.length > 0 &&
        listArr.map((el, idx) => (
          <ListEl
            key={idx}
            onClick={() => handleClick(el.title, el.keyName)}
            $selected={selectedTitles.includes(el.title)}
          >
            <IconTitle icon={el.icon} title={el.title} />
          </ListEl>
        ))}
    </ListContainer>
  );
}

export default MultiSelectList;
