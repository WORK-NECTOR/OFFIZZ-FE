import { useState } from 'react';
import { MultiSelectListProps } from '@/types/list.type';
import { ListContainer, ListEl } from './MultiSelectList.styled';
import IconTitle from '@/components/IconTitle';

function MultiSelectList(props: MultiSelectListProps) {
  const { listArr, selectFunc } = props;
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  function handleClick(title: string, keyName: string) {
    let updatedTitles: string[] = [];
    let updatedKeys: string[] = [];

    if (selectedTitles.includes(title)) {
      // 선택된 항목을 해제 (title, keyName을 배열에서 제거)
      updatedTitles = selectedTitles.filter((item) => item !== title);
      updatedKeys = selectedKeys.filter((key) => key !== keyName);
    } else {
      // 선택되지 않은 항목을 추가
      updatedTitles = [...selectedTitles, title];
      updatedKeys = [...selectedKeys, keyName];
    }

    // 상태 업데이트
    setSelectedTitles(updatedTitles);
    setSelectedKeys(updatedKeys);

    // 선택된 keyName 배열을 selectFunc에 전달
    selectFunc(updatedKeys);
  }

  return (
    <ListContainer>
      {listArr.length > 0 &&
        listArr.map((el, idx) => (
          <ListEl
            // eslint-disable-next-line react/no-array-index-key
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
