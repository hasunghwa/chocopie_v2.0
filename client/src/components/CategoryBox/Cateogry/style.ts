import styled from 'styled-components';
import color from '@styles/Colors';

const CategoryWrapper = styled.div<{ imgUrl: string; content: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  :hover {
    :before {
      display: flex;
      justify-content: center;
      align-items: center;
      content: '${props => props.content}';
      color: ${color.White};
      font-size: 1.5rem;
      width: 100%;
      height: 100%;
      background: ${color.DarkGray};
      opacity: 0.9;
    }
  }
`;

export { CategoryWrapper };
