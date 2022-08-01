import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { MypageSideWrapper, Li } from './style';

const MyCategory: { [key: string]: string } = {
  profile: '내 정보',
  bookmark: '찜한가게',
  order: '주문현황',
};

type CategoryStrings = keyof typeof MyCategory;

const MypageSide = () => {
  const currentCategory = useParams().category as CategoryStrings;

  return (
    <MypageSideWrapper>
      <ul>
        {Object.keys(MyCategory).map((item: string) => (
          <Li key={item} isActive={currentCategory == item}>
            <Link to={`/my/${item}`}>{MyCategory[item]}</Link>
          </Li>
        ))}
      </ul>
    </MypageSideWrapper>
  );
};

export default MypageSide;
