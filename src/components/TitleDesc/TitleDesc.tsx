import React from 'react';
import { TitleDescProps } from '@/types/titleDesc.type';
import { TitleDescContainer } from './TitleDesc.styled';

function TitleDesc(props: TitleDescProps) {
  const { sort, title, desc } = props;

  return (
    <TitleDescContainer $sort={sort}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </TitleDescContainer>
  );
}

export default TitleDesc;
