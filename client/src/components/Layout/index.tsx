import React from 'react';

import Footer from './Footer/index';
import Header from './Header/index';
import { Content, LayoutWarapper } from './style';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutWarapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </LayoutWarapper>
  );
};

export default Layout;
