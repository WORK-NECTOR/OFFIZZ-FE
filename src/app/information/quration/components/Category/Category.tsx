import React, { useState } from 'react';
import { CategoryBox } from './Category.styled';
import useCategoryStore from '@/store/useCategoryStore';

function QurationCategory() {
  const categories = ['전체', '카페', '공유오피스'];
  const categoryMap: Record<string, string> = {
    '전체': 'all',
    '카페': 'cafe',
    '공유오피스': 'office',
  };

  
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const { setActiveTab } = useCategoryStore();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveTab(categoryMap[category]);
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
