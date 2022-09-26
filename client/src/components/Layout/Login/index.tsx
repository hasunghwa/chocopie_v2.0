import React from 'react';

import Header from '../Header/index';
import { Content, LayoutWrapper } from '../style';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const LoginLayout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Header auth={false} />
      <Content>{children}</Content>
    </LayoutWrapper>
  );
};

export default LoginLayout;
