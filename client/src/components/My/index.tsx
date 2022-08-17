import React from 'react';
import { useParams } from 'react-router-dom';

import Profile from './Profile';
import Bookmark from './Bookmark';
import Order from './Order';
import { MyContentWrapper } from './style';

const MyCategory = {
  profile: <Profile />,
  bookmark: <Bookmark />,
  order: <Order />,
};

type CategoryStrings = keyof typeof MyCategory;

const MyContent = () => {
  const currentCategory = useParams().category as CategoryStrings;

  return <MyContentWrapper>{MyCategory[currentCategory]}</MyContentWrapper>;
};

export default MyContent;
