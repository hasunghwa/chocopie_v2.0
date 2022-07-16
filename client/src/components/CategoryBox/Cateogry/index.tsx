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
    <Link to={linkTo}>
      <CategoryWrapper imgUrl={imgPath} content={categoryName} />
    </Link>
  );
};
export default Category;
