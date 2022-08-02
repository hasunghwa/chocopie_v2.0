import styled from 'styled-components';
import color from '@styles/Colors';

const StoreinfoSideWrapper = styled.div`
  position: fixed;
  width: 208px;
`;

const StoreImg = styled.img`
  width: 208px;
`;

const StoreName = styled.div`
  margin: 20px 0px;
  height: 80px;
`;

const WriteBtn = styled.button`
  background-color: ${color.LightRed};
  color: ${color.White};
  width: 100%;
  height: 40px;
  margin-bottom: 14px;
`;

const SettingBtn = styled.button`
  background-color: ${color.Blue};
  color: ${color.White};
  width: 100%;
  height: 40px;
`;

export { StoreinfoSideWrapper, StoreImg, StoreName, WriteBtn, SettingBtn };
