import styled from 'styled-components';
import ReactQuill from 'react-quill';

const CustomReactQuill = styled(ReactQuill)`
  height: 360px;
  .ql-toolbar:first-child {
    display: none !important;
  }
`;

export { CustomReactQuill };
