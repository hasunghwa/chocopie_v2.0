import React from 'react';

import { useInput } from '@hooks/UseInput';
import ChangeForm from '..';

interface Props {
  initialValues: string;
}

const ChangePhoneForm = ({ initialValues }: Props) => {
  const [value, onChangeInputValue, isValid] = useInput({
    type: 'string',
    autoFix: false,
  });

  const middleContent = (
    <input
      placeholder={initialValues}
      value={value}
      onChange={onChangeInputValue}
    />
  );

  const writePost = () => {
    if (isValid) {
      console.log(value);
    } else {
      console.log('실패');
    }
  };

  return (
    <ChangeForm
      props={{
        initialValues: initialValues,
        middleContent: middleContent,
      }}
      controller={{ submit: writePost }}
    />
  );
};

export default ChangePhoneForm;
