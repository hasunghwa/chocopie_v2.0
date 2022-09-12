import color from '@styles/Colors';
import styled from 'styled-components';

const SearchForm = styled.form`
  box-shadow: 0 1.4px 1.3px 0 rgb(62 73 89 / 10%);
  background-color: ${color.White};
  margin-bottom: 12px;
  padding: 0 45px 0 15px;
  & input {
    width: 100%;
    height: 40px;
  }
`;

const CenterContent = styled.div`
  width: 540px;
  z-index: 50;
  margin-left: 210px;
`;

export { SearchForm, CenterContent };
