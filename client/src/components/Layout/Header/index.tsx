import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderWarapper, Nav, Logo } from './style';

interface Props {
  auth?: boolean;
}

const Header = ({ auth = true }: Props) => {
  return (
    <HeaderWarapper>
      <Container auth={auth}>
        <Link to="/">
          <Logo />
        </Link>
        {auth && (
          <Nav>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>장바구니</li>
            <li>
              <Link to="/my/profile">마이페이지</Link>
            </li>
          </Nav>
        )}
      </Container>
    </HeaderWarapper>
  );
};

export default Header;
