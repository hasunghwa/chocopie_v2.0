import React from 'react';

import Layout from '@components/Layout';
import Stores from '@components/Stores';
import { StoreListWrapper } from './style';

function StoreList() {
  return (
    <Layout isFooter={false}>
      <StoreListWrapper>
        <Stores />
      </StoreListWrapper>
    </Layout>
  );
}

export default StoreList;
