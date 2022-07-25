import React from 'react';

import Modal from '..';

interface ModalController {
  hide: () => void;
  show?: () => void;
}

function WritePostModal({ controller }: { controller: ModalController }) {
  const middleContent = (
    <>
      <div>아</div>
    </>
  );
  return (
    <Modal
      props={{
        middleContent: middleContent,
      }}
      controller={controller}
    />
  );
}

export default WritePostModal;
