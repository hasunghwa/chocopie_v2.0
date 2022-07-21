import React from 'react';

import Footer from './Footer/index';
import Header from './Header/index';
import { Content, LayoutWrapper } from './style';

interface Props {
  children: JSX.Element[] | JSX.Element;
  isFooter?: boolean;
}

const Layout = ({ children, isFooter = true }: Props) => {
  return (
    <LayoutWrapper>
      <Header />
      <Content>{children}</Content>
      {isFooter ? <Footer /> : null}
    </LayoutWrapper>
  );
};

export default Layout;
