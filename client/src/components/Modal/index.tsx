import React, { useState } from 'react';

import { Bottom, Background, Wrapper, BottomLeftButton } from './style';
interface ModalData {
  middleContent: ReactElement<any, any>;
}

interface ModalController {
  hide: () => void;
  show?: () => void;
}

function Modal({
  props: { middleContent },
  controller: { hide },
}: {
  props: ModalData;
  controller: ModalController;
}) {
  const [hidden, setHidden] = useState(false);

  const hideModal = () => {
    setHidden(() => true);
    setTimeout(() => {
      hide();
    }, 300);
  };

  return (
    <Background onClick={hideModal} isHidden={hidden}>
      <Wrapper onClick={e => e.stopPropagation()} isHidden={hidden}>
        <div>{middleContent}</div>
      </Wrapper>
      <Bottom>
        <BottomLeftButton onClick={hideModal}>닫기</BottomLeftButton>
      </Bottom>
    </Background>
  );
}

export default Modal;
