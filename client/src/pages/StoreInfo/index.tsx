import React from 'react';

import StoreInfoLayout from '@components/Layout/StoreInfo';
import Board from '@components/Board';
import { SearchForm } from './style';

const StoreInfo = () => {
  return (
    <StoreInfoLayout>
      <SearchForm>
        <input placeholder="게시글 검색" type="text"></input>
      </SearchForm>
      <Board></Board>
      <Board></Board>
      <Board></Board>
      <Board></Board>
      <Board></Board>
      <Board></Board>
    </StoreInfoLayout>
  );
};

export default StoreInfo;
