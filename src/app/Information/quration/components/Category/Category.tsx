import React from 'react';
import { CategoryBox } from './Category.styled';

function QurationCategory() {
  const categories = ['전체', '카페', '공유오피스', '도서관'];

  return (
    <>
      {categories.map((category, index) => (
        <CategoryBox key={index}>{category}</CategoryBox>
      ))}
    </>
  );
}

export default QurationCategory;