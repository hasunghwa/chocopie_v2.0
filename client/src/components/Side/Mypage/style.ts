import Colors from '@styles/Colors';
import styled from 'styled-components';

const MypageSideWrapper = styled.div`
  width: 208px;
  background-color: ${Colors.White};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

interface IActiveLi {
  isActive: boolean;
}

const Li = styled.li<IActiveLi>`
  color: ${props => (props.isActive ? Colors.Black : Colors.DarkGray)};
  font-weight: ${props => (props.isActive ? 600 : '')};
  font-size: 14px;
  padding: 16px 10px;
  border-bottom: 1px solid ${Colors.LightGray2};
`;

export { MypageSideWrapper, Li };
