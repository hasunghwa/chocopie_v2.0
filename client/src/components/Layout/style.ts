import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  min-height: calc(100vh - 95px);
  width: 1024px;
  margin-top: 25px;
  padding-top: 70px;
`;

export { LayoutWrapper, Content };
