import React, { useState } from 'react';

import ChangeForm from '..';
import { SelectWrapper, SelectYear, SelectMonth, SelectDay } from './style';

const years = [
  { value: '1970', label: '1970' },
  { value: '1971', label: '1971' },
  { value: '1972', label: '1972' },
  { value: '1997', label: '1997' },
  { value: '1998', label: '1998' },
];

const months = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '12', label: '12' },
];

const days = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
];

interface Props {
  initialValues: string;
}

const ChangeBirthdayForm = ({ initialValues }: Props) => {
  const splitDate = () => {
    let newday = initialValues;
    const date: string[] = [];

    date.push(newday.split('년 ')[0]);
    newday = newday.split('년 ')[1];

    date.push(newday.split('월 ')[0]);
    newday = newday.split('월 ')[1];

    date.push(newday.split('일')[0]);

    return date;
  };

  const date = splitDate();
  interface Date {
    year: string;
    month: string;
    day: string;
  }

  const [selectedOption, setSelectedOption] = useState<Date>({
    year: date[0],
    month: date[1],
    day: date[2],
  });

  const middleContent = (
    <SelectWrapper>
      <SelectYear
        defaultValue={{
          label: selectedOption.year,
          value: selectedOption.year,
        }}
        onChange={newValue => {
          setSelectedOption({ ...selectedOption, year: newValue as string });
        }}
        options={years}
      />
      <SelectMonth
        defaultValue={{
          label: selectedOption.month,
          value: selectedOption.month,
        }}
        onChange={newValue => {
          setSelectedOption({ ...selectedOption, month: newValue as string });
        }}
        options={months}
      />
      <SelectDay
        defaultValue={{
          label: selectedOption.day,
          value: selectedOption.day,
        }}
        onChange={newValue => {
          setSelectedOption({ ...selectedOption, day: newValue as string });
        }}
        options={days}
      />
    </SelectWrapper>
  );

  const changeBirthday = () => {
    console.log(selectedOption);
  };

  return (
    <ChangeForm
      props={{
        initialValues: initialValues,
        middleContent: middleContent,
      }}
      controller={{ submit: changeBirthday }}
    />
  );
};

export default ChangeBirthdayForm;
