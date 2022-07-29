import React from 'react';

import { useDaumPostcodePopup } from 'react-daum-postcode';
import { Button } from './style';

const PostCode = ({ text, handleComplete }: PostCodeProps) => {
  const open = useDaumPostcodePopup(
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
  );

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

export default PostCode;
