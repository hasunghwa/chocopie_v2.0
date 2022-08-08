import React, { useState } from 'react';

import {
  ButtonWrapper,
  CancelBtn,
  ChangeBtn,
  ComfirmBtn,
  Content,
} from './style';

function ChangeForm({
  props: { initialValues, middleContent },
  controller: { submit, change },
}: {
  props: UserData;
  controller: UserController;
}) {
  const [isChange, setIsChange] = useState(false);

  const onSubmit = () => {
    submit();
    setIsChange(() => true);
  };

  const changeValue = () => {
    if (change) {
      change();
    }
    setIsChange(() => true);
  };

  return (
    <>
      {isChange ? (
        <>
          <Content>{middleContent}</Content>
          <ButtonWrapper>
            <ComfirmBtn onClick={() => onSubmit()}>확인</ComfirmBtn>
            <CancelBtn onClick={() => setIsChange(false)}>취소</CancelBtn>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Content>{initialValues}</Content>
          <ButtonWrapper>
            <ChangeBtn onClick={changeValue}>변경</ChangeBtn>
          </ButtonWrapper>
        </>
      )}
    </>
  );
}

export default ChangeForm;
