import styled from 'styled-components';
import color from '@styles/Colors';
import logo from '/img/logo.png';

const HeaderWarapper = styled.header`
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${color.White};
  box-shadow: 0 1.4px 1.3px 0 rgba(62, 73, 89, 0.07);
`;

const Container = styled.div<{ auth: boolean }>`
  display: flex;
  justify-content: ${props => (props.auth ? 'space-between' : 'center')};
  align-items: center;
  width: 1024px;
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
