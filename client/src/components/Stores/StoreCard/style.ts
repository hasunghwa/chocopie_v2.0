import styled from 'styled-components';
import color from '@styles/Colors';

const StoreWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${color.LightGray};
  padding: 20px 0px;
`;

const StoreImg = styled.img`
  width: 400px;
  height: 200px;
`;

const StoreInfo = styled.div`
  margin-left: 30px;
  flex-grow: 4;
  h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
`;

const StoreOwnerInfo = styled.div`
  line-height: 20px;
  flex-grow: 1;
`;

export { StoreWrapper, StoreImg, StoreInfo, StoreOwnerInfo };
