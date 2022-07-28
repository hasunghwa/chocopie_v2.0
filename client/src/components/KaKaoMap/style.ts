import styled from 'styled-components';
import { MapMarker } from 'react-kakao-maps-sdk';
import Colors from '@styles/Colors';

const CustomMapMarker = styled(MapMarker)``;

const MarkContent = styled.div`
  display: none;
  background-color: ${Colors.White};
`;

export { CustomMapMarker, MarkContent };
