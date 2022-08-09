import React from 'react';

import { useInput } from '@hooks/UseInput';
import ChangeForm from '..';
import { Input } from './style';

const ChangeNameForm = ({ initialValues }) => {
  const [value, onChangeInputValue, isValid] = useInput({
    initialValue: initialValues,
    type: 'string',
    autoFix: false,
  });

  const middleContent = <Input value={value} onChange={onChangeInputValue} />;

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

export default ChangeNameForm;
