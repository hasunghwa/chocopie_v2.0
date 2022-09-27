import Colors from '@styles/Colors';
import styled from 'styled-components';

const StoreInfoWrapper = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  height: 600px;
`;

const StoreInfoContent = styled.div`
  z-index: 50;
  width: 720px;
  background-color: ${Colors.White};
`;

const StoreInfoempty = styled.div``;

export { StoreInfoWrapper, StoreInfoContent, StoreInfoempty };
