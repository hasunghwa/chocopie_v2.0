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
    background-color: ${Colors.LightGray};
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  },
  a {
    text-decoration: none;
  }
  button {    
    font-size: 14px;
    font-weight: 600;
    border: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 14px;
  }
  input {
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
