import React from 'react';

import Editor from '@components/Editor';
import Colors from '@styles/Colors';

import Modal from '..';
import { WritePostWrapper } from './style';

function WritePostModal({ controller }: { controller: ModalController }) {
  const middleContent = (
    <WritePostWrapper>
      <Editor />
    </WritePostWrapper>
  );

  const writePost = () => {
    console.log('게시');
  };

  return (
    <Modal
      props={{
        middleContent: middleContent,
        title: '글쓰기',
        bottomRightButton: {
          text: '게시',
          color: Colors.Blue,
          onClickHandler: () => {
            writePost();
          },
        },
      }}
      controller={controller}
    />
  );
}

export default WritePostModal;
