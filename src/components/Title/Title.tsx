import { TitleDescProps } from '@/types/titleDesc.type';
import React from 'react';
import { MainTitle } from './Title.styled';

function Title(props: TitleDescProps) {
  const { title, desc } = props;
  return (
    <MainTitle>
      <div id='title-text'>{title}</div>
      <div id='desc-text'>{desc}</div>
    </MainTitle>
  );
}

export default Title;