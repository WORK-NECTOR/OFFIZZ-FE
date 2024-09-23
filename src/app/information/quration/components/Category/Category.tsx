import React from 'react';
import { CategoryBox } from './Category.styled';

function QurationCategory() {
  const categories = ['전체', '카페', '공유오피스', '도서관'];

  return (
    <>
      {categories.map((category) => (
        <CategoryBox key={category}>{category}</CategoryBox>
      ))}
    </>
  );
}

export default QurationCategory;
