import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryWrapper } from './style';

interface CategoryProps {
  imgPath: string;
  linkTo: string;
  categoryName: string;
}

const Category = ({ imgPath, linkTo, categoryName }: CategoryProps) => {
  return (
    <CategoryWrapper imgUrl={imgPath} content={categoryName}>
      <Link to={linkTo} />
    </CategoryWrapper>
  );
};
export default Category;
