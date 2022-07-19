import React from 'react';

import Layout from '..';
import Header from '../Header';
import StoreinfoSide from './Side';

import { StoreInfoWrapper, StoreInfoContent, StoreInfoempty } from './style';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const StoreInfoLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <StoreInfoWrapper>
        <StoreinfoSide />
        <StoreInfoContent>{children}</StoreInfoContent>
        <StoreInfoempty />
      </StoreInfoWrapper>
    </>
  );
};

export default StoreInfoLayout;
