import styled from 'styled-components';

const LayoutWarapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  min-height: calc(100vh - 195px);
  width: 70%;
  margin-top: 25px;
`;

export { LayoutWarapper, Content };
