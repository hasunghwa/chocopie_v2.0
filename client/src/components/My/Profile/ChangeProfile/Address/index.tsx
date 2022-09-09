import React from 'react';

import ChangeForm from '..';
import PostCode from '@utils/postCode';
import { getFullAddress } from '@utils/addressUtil';
interface Props {
  initialValues: string;
}

const ChangeAddressForm = ({ initialValues }: Props) => {
  const handleComplete = async (data: PostCodeReturnData) => {
    const newAddress = getFullAddress(data);
    console.log(newAddress);
  };

  const openPostCode = PostCode({ handleComplete: handleComplete });

  const middleContent = <button onClick={openPostCode}>{initialValues}</button>;

  const writePost = () => {
    return;
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

export default ChangeAddressForm;
