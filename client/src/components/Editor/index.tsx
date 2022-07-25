import React, { useRef, useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { CustomReactQuill } from './style';

const Editor = () => {
  const editorRef = useRef<ReactQuill>(null);
  const [htmlStr, setHtmlStr] = useState();

  // 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
  const toolbarOptions = [
    ['link', 'image'],
    [{ header: [1, 2, 3, false] }],
    ['bold', 'underline', 'strike'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'underline',
    'strike',
    'align',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'background',
    'color',
    'link',
    'image',
    'width',
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  return (
    <CustomReactQuill
      ref={editorRef}
      value={htmlStr}
      modules={modules}
      formats={formats}
      placeholder="내용을 입력하세요."
    />
  );
};

export default Editor;
