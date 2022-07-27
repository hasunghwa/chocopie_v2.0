import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { MenuWrapper, Li } from './style';

const Category: { [key: string]: string } = {
  agricultural: '농산물',
  seafood: '수산물',
  meat: '축산물',
  sidedish: '반찬',
  clothing: '의류',
  health: '건강식품',
};

type CategoryStrings = keyof typeof Category;

const CategoryMenu = () => {
  const currentCategory = useParams().category as CategoryStrings;

  return (
    <MenuWrapper>
      <ul>
        {Object.keys(Category).map((item: string) => (
          <Li key={item} isActive={currentCategory == item}>
            <Link to={`/storelist/${item}`}>{Category[item]}</Link>
          </Li>
        ))}
      </ul>
    </MenuWrapper>
  );
};

export default CategoryMenu;
