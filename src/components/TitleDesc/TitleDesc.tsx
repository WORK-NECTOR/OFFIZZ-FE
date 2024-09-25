import React from 'react';
import { TitleDescProps } from '@/types/titleDesc.type';
import { TitleDescContainer } from './TitleDesc.styled';

function TitleDesc(props: TitleDescProps) {
  const { sort, title, desc, titleSize = '2rem', descSize = '1.25rem' } = props;

  return (
    <TitleDescContainer
      $sort={sort}
      $titleSize={titleSize}
      $descSize={descSize}
      id="title-desc"
    >
      <h2>{title}</h2>
      <p>{desc}</p>
    </TitleDescContainer>
  );
}

export default TitleDesc;
