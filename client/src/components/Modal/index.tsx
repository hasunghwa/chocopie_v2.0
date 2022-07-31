import React, { useState } from 'react';

import { CancelIcon } from '@components/common/Icons';
import {
  Top,
  Background,
  Wrapper,
  TopRightButton,
  Title,
  BottomRightButton,
  Bottom,
} from './style';

function Modal({
  props: { middleContent, title, bottomRightButton },
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
        <Top>{title && <Title>{title}</Title>}</Top>
        <TopRightButton onClick={hideModal}>
          <CancelIcon />
        </TopRightButton>
        <div>{middleContent}</div>
        {bottomRightButton && (
          <Bottom>
            <BottomRightButton
              color={bottomRightButton.color}
              onClick={bottomRightButton.onClickHandler}
            >
              {bottomRightButton.text}
            </BottomRightButton>
          </Bottom>
        )}
      </Wrapper>
    </Background>
  );
}

export default Modal;
