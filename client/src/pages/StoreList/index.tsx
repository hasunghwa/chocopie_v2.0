import React from 'react';
import { useParams } from 'react-router-dom';

import Layout from '@components/Layout';
import Stores from '@components/Stores';

enum Category {
  agricultural = '농산물',
  seafood = '수산물',
  meat = '축산물',
  sidedish = '반찬',
  clothing = '의류',
  health = '건강식품',
}

type CategoryStrings = keyof typeof Category;

function StoreList() {
  const selectCategory = useParams().category as CategoryStrings;

  return (
    <Layout>
      <div>{Category[selectCategory]}</div>
      <Stores />
    </Layout>
  );
}

export default StoreList;
