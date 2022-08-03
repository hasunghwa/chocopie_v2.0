import styled from 'styled-components';
import { MapMarker } from 'react-kakao-maps-sdk';
import Colors from '@styles/Colors';

const CustomMapMarker = styled(MapMarker)``;

const MarkContent = styled.div`
  display: none;
  background-color: ${Colors.White};
`;

const PostCodeBtn = styled.button`
  padding: 8px 16px;
  background-color: ${Colors.LightRed};
  position: absolute;
  left: 20px;
  bottom: 16px;
`;

export { CustomMapMarker, MarkContent, PostCodeBtn };
