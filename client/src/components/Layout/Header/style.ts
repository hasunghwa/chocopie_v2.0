import styled from 'styled-components';
import color from '@styles/Colors';
import logo from '/logo.svg';

const HeaderWarapper = styled.header`
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${color.White};
  box-shadow: 0 1.4px 1.3px 0 rgba(62, 73, 89, 0.07);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Nav = styled.ul`
  display: flex;
  li + li {
    margin-left: 30px;
  }
`;

const Logo = styled.div`
  display: block;
  width: 100px;
  height: 70px;
  background-image: url(${logo});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export { HeaderWarapper, Container, Nav, Logo };
