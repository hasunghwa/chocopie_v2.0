import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
  ${reset}  
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Pretendard Variable;
    width: 100vw;
    min-width: 1100px;
    height: 100vh;
    background-color: ${Colors.White};
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    }
  }
`;

export default GlobalStyle;
