import styled from 'styled-components';

const CategoryBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, auto));
  justify-content: center;
  gap: 50px 30px;
`;

export { CategoryBoxWrapper };
