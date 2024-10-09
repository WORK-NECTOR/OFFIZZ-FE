import React, { useState } from 'react';
import { CategoryBox } from './Category.styled';

function QurationCategory() {
  const categories = ['전체', '카페', '공유오피스'];
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {categories.map((category) => (
        <CategoryBox
          key={category}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </CategoryBox>
      ))}
    </>
  );
}

export default QurationCategory;
