import React from 'react';
import Category from './Cateogry';
import { CategoryBoxWrapper } from './style';

interface CategoryProps {
  imgPath: string;
  linkTo: string;
  categoryName: string;
}

const CategoryBox = () => {
  const Categorys: CategoryProps[] = [
    {
      imgPath: './img/category-img1.jpg',
      linkTo: '/',
      categoryName: '농산물',
    },
    {
      imgPath: './img/category-img2.jpg',
      linkTo: '/',
      categoryName: '수산물',
    },
    {
      imgPath: './img/category-img3.jpg',
      linkTo: '/',
      categoryName: '축산물',
    },
    {
      imgPath: './img/category-img4.jpg',
      linkTo: '/',
      categoryName: '반찬',
    },
    {
      imgPath: './img/category-img5.jpg',
      linkTo: '/',
      categoryName: '의류',
    },
    {
      imgPath: './img/category-img6.jpg',
      linkTo: '/',
      categoryName: '건강식품',
    },
  ];

  return (
    <CategoryBoxWrapper>
      {Categorys.map(item => (
        <Category
          key={item.categoryName}
          imgPath={item.imgPath}
          linkTo={item.linkTo}
          categoryName={item.categoryName}
        ></Category>
      ))}
    </CategoryBoxWrapper>
  );
};

export default CategoryBox;
