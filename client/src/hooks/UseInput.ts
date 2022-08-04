import { useState, useCallback, useRef } from 'react';

interface Options {
  initialValue?: string;
  maxValue?: number;
  minValue?: number;
  maxLength?: number;
  minLength?: number;
  autoFix?: boolean;
  type?: 'number' | 'string';
}

type returnType = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  boolean
];

export const useInput = (options?: Options): returnType => {
  const {
    initialValue,
    maxLength,
    minLength = 0,
    autoFix = true,
    type = 'string',
  } = options || {};
  const [value, setValue] = useState<string>(initialValue || '');
  const isValid = useRef<boolean>(true);

  const handleString = useCallback(
    (receivedValue: string) => {
      let result: string = receivedValue;

      if (maxLength) {
        result = result.substr(0, maxLength);
      }

      const returnValue: string = autoFix ? result : receivedValue;
      isValid.current =
        result === receivedValue && returnValue.length >= minLength;
      setValue(returnValue);
    },
    [maxLength, minLength, autoFix]
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue: string = e.target.value || '';
      handleString(targetValue);
    },
    [type, handleString]
  );

  return [value, onChangeInput, isValid.current];
};
