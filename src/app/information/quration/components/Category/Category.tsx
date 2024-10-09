import React, { useState } from 'react';
import { CategoryBox } from './Category.styled';
import useCategoryStore from '@/store/useCategoryStore';

function QurationCategory() {
  const categories = ['전체', '카페', '공유오피스'];
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const { activeCategory, setActiveTab } = useCategoryStore();
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveTab(category);
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
