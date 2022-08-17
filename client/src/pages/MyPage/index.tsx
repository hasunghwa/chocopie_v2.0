import React from 'react';

import SplitLayout from '@components/Layout/Split';
import MypageSide from '@components/Side/Mypage';
import MyContent from '@components/My';

const MyPage = () => {
  return (
    <SplitLayout>
      <MypageSide />
      <MyContent />
    </SplitLayout>
  );
};

export default MyPage;
