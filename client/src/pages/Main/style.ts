import styled from 'styled-components';
import color from '../../styles/Colors';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  gap: 30px;
`;

const MarketSelectBtn = styled.button`
  min-height: 56px;
  width: 100%;
  height: auto;
  padding: 14px 30px;
  background-color: ${color.White};
  box-shadow: 0 1.4px 1.3px 0 rgb(62 73 89 / 10%);

  span {
    font-size: 16px;
  }
`;

export { MainWrapper, MarketSelectBtn };
