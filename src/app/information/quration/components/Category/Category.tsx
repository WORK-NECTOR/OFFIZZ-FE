import React, { useState } from 'react';
import { CategoryBox, CategoryBoxVacation } from './Category.styled';
import useCategoryStore from '@/store/useCategoryStore';
import useSelectToggleStore from '@/store/useSelectToggleStore';

function QurationCategory() {
  const { activeToggle } = useSelectToggleStore();
  const categories = ['전체', '카페', '공유오피스'];
  const categoryMap: Record<string, string> = {
    전체: 'all',
    카페: 'cafe',
    공유오피스: 'office',
  };
  const categoriesVacation = ['전체', '자연', '맛집', '문화예술', '쇼핑'];
  const categoryMapVacation: Record<string, string> = {
    전체: 'all',
    자연: 'nature',
    맛집: 'restaurant',
    문화예술: 'culture',
    쇼핑: 'shopping',
  };

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const { setActiveTab } = useCategoryStore();
  const { setActiveTabString } = useCategoryStore();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveTabString(category);
    setActiveTab(categoryMap[category]);
  };
  const handleCategoryClickVacation = (category: string) => {
    setSelectedCategory(category);
    setActiveTabString(category);
    setActiveTab(categoryMapVacation[category]);
  };

  return (
    <>
      {activeToggle === 'work' && (
        <>
          {categories.map((category) => (
            <CategoryBox
              key={category}
              onClick={() => handleCategoryClick(category)}
              isActive={selectedCategory === category}
            >
              {category}
            </CategoryBox>
          ))}
        </>
      )}
      {activeToggle === 'vacation' && (
        <>
          {categoriesVacation.map((category) => (
            <CategoryBoxVacation
              key={category}
              onClick={() => handleCategoryClickVacation(category)}
              isActive={selectedCategory === category}
            >
              {category}
            </CategoryBoxVacation>
          ))}
        </>
      )}
    </>
  );
}

export default QurationCategory;
