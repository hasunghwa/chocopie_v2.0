import React from 'react';
import Layout from '..';

import Header from '../Header';

import { StoreInfoWrapper, StoreInfoContent, StoreInfoempty } from './style';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const MyPageLayout = ({ children }: Props) => {
  return (
    <Layout>
      <StoreInfoWrapper>
        <StoreInfoContent>{children}</StoreInfoContent>
        <StoreInfoempty />
      </StoreInfoWrapper>
    </Layout>
  );
};

export default MyPageLayout;
