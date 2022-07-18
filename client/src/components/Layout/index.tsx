import React from 'react';

import Footer from './Footer/index';
import Header from './Header/index';
import { Content, LayoutWrapper } from './style';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
