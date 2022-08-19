import styled from 'styled-components';
import Colors from '@styles/Colors';

const Table = styled.table`
  text-align: center;
  width: 100%;
  background-color: ${Colors.White};
`;

const Th = styled.th`
  border-bottom: solid 3px ${Colors.LightGray2};
  background-color: transparent;
  color: black;
  height: 60px;
  vertical-align: middle;
  font-weight: 600;
`;

const Td = styled.td`
  font-size: 14px;
  vertical-align: middle;
  padding: 10px;
  border: solid 1px ${Colors.LightGray};
  overflow: auto;
  line-height: 150%;
  h4 {
    font-weight: 600;
  }
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StoreImg = styled.img`
  width: 160px;
  height: 120px;
`;

export { Table, Th, Td, StoreInfo, StoreImg };
