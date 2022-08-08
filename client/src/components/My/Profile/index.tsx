import React from 'react';

import ChangeNameForm from './ChangeName/Name';
import ChangeBirthdayForm from './ChangeName/Birthday';
import ChangeGenderForm from './ChangeName/Gender';
import ChangePhoneForm from './ChangeName/Phone';
import ChangeAddressForm from './ChangeName/Address';
import ChangePswordForm from './ChangeName/Psword';
import { ProfileWrapper } from './style';

const Profile = () => {
  const User: User = {
    name: '홍길동',
    gender: '남성',
    birthday: '1997년 6월 28일',
    phone: '01041840152',
    email: '@naver.com',
    address: '지구어딘가',
    pw: '123!',
  };

  return (
    <ProfileWrapper>
      <ul>
        <li>
          <h3>이름</h3>
          <ChangeNameForm initialValues={User.name} />
        </li>
        <li>
          <h3>생일</h3>
          <ChangeBirthdayForm initialValues={User.birthday} />
        </li>
        <li>
          <h3>성별</h3>
          <ChangeGenderForm initialValues={User.gender} />
        </li>
        <li>
          <h3>휴대폰 번호</h3>
          <ChangePhoneForm initialValues={User.phone} />
        </li>
        <li>
          <h3>주소</h3>
          <ChangeAddressForm initialValues={User.address} />
        </li>
        <li>
          <h3>비밀번호</h3>
          <ChangePswordForm initialValues={User.pw} />
        </li>
      </ul>
    </ProfileWrapper>
  );
};

export default Profile;
