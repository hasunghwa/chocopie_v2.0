import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderWarapper, Nav, Logo } from './style';

const Header = () => {
  return (
    <HeaderWarapper>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <li>로그인</li>
          <li>장바구니</li>
          <li>마이페이지</li>
        </Nav>
      </Container>
    </HeaderWarapper>
  );
};

export default Header;
