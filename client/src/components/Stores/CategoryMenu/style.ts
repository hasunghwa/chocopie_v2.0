import Colors from '@styles/Colors';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  background-color: ${Colors.White};
  width: 100%;
  padding: 14px 30px;
  margin-bottom: 10px;
  box-shadow: 0 1.4px 1.3px 0 rgb(62 73 89 / 10%);

  ul {
    display: flex;
    justify-content: space-around;
  }
`;

interface IActiveLi {
  isActive: boolean;
}

const Li = styled.li<IActiveLi>`
  float: left;
  a {
    color: ${props => (props.isActive ? Colors.Black : Colors.DarkGray)};
    font-weight: ${props => (props.isActive ? 600 : '')};

    :hover {
      color: ${Colors.Black};
    }

    :active {
      color: ${Colors.Black};
    }
  }
`;

export { MenuWrapper, Li };
