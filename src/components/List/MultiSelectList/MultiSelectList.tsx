import { MultiSelectListProps } from '@/types/list.type';
import { ListContainer, ListEl } from './MultiSelectList.styled';
import IconTitle from '@/components/IconTitle';
import { useState } from 'react';

function MultiSelectList(props: MultiSelectListProps) {
  const { listArr, selectFunc } = props;
  const [selected, setSelected] = useState<string[]>([]);

  function handleClick(title: string) {
    if (selected.includes(title)) {
      // 이미 선택된 항목이면 제거
      setSelected(selected.filter((item) => item !== title));
    } else {
      // 선택되지 않은 항목이면 추가
      setSelected([...selected, title]);
    }
    selectFunc(selected); // 선택된 항목 리스트를 전달
  }

  return (
    <ListContainer>
      {listArr.length > 0 &&
        listArr.map((el, idx) => (
          <ListEl
            key={idx}
            onClick={() => handleClick(el.title)}
            $selected={selected.includes(el.title)}
          >
            <IconTitle icon={el.icon} title={el.title} />
          </ListEl>
        ))}
    </ListContainer>
  );
}

export default MultiSelectList;
