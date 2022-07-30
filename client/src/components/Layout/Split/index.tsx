import React from 'react';
import Layout from '..';

import {
  SplitWrapper,
  LeftContent,
  CenterContent,
  RightContent,
} from './style';

interface Props {
  children: JSX.Element[];
}

const SplitLayout = ({ children }: Props) => {
  return (
    <Layout>
      <SplitWrapper>
        <LeftContent>{children[0]}</LeftContent>
        <CenterContent>{children[1]}</CenterContent>
        <RightContent>{children[2]}</RightContent>
      </SplitWrapper>
    </Layout>
  );
};

export default SplitLayout;
