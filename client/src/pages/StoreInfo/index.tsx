import React from 'react';

import Board from '@components/Board';
import { SearchForm, CenterContent } from './style';
import StoreinfoSide from '@components/Side/Storeinfo';
import SplitLayout from '@components/Layout/Split';

const StoreInfo = () => {
  return (
    <SplitLayout>
      <StoreinfoSide />
      <CenterContent>
        <SearchForm>
          <input placeholder="게시글 검색" type="text"></input>
        </SearchForm>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
        <Board></Board>
      </CenterContent>
    </SplitLayout>
  );
};

export default StoreInfo;
