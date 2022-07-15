import styled from 'styled-components';
import color from '../../styles/Colors';

const LayoutWarapper = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  min-height: calc(100vh - 170px);
`;

export { LayoutWarapper, Content };
