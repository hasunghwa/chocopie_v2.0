import React, { useState } from 'react';

import ChangeForm from '..';
import { SelectGender } from './style';

const genders = [
  { value: '남성', label: '남성' },
  { value: '여성', label: '여성' },
];
interface Props {
  initialValues: string;
}

const ChangeGenderForm = ({ initialValues }: Props) => {
  const [gender, setGender] = useState(initialValues);

  const middleContent = (
    <SelectGender
      defaultValue={{
        label: gender,
        value: gender,
      }}
      onChange={newValue => {
        setGender(newValue as string);
      }}
      options={genders}
    />
  );

  const changeGender = () => {
    console.log(gender);
  };

  return (
    <ChangeForm
      props={{
        initialValues: initialValues,
        middleContent: middleContent,
      }}
      controller={{ submit: changeGender }}
    />
  );
};

export default ChangeGenderForm;
