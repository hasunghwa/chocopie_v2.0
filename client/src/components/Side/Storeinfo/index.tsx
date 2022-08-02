import React, { useState } from 'react';
import WritePostModal from '@components/Modal/WritePost';
import {
  StoreinfoSideWrapper,
  StoreImg,
  StoreName,
  WriteBtn,
  SettingBtn,
} from './style';

interface StoreProps {
  id: number;
  name: string;
  mainImg: string;
  introduce: string;
  owner: string;
  address: string;
  phone: string;
}

const StoreinfoSide = () => {
  const StoreList: StoreProps = {
    id: 1,
    name: '가게1',
    mainImg:
      'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    introduce: '팔아요',
    owner: '나다',
    address: '지구 어딘가',
    phone: '010-3333-3333',
  };

  const [tryLogout, setTryLogOut] = useState(false);

  const logOutModalControl: ModalController = {
    hide: () => setTryLogOut(false),
    show: () => setTryLogOut(true),
  };

  return (
    <>
      <StoreinfoSideWrapper>
        <StoreImg src={StoreList.mainImg} />
        <StoreName>
          <h3>{StoreList.name}</h3>
          <p>{StoreList.introduce}</p>
        </StoreName>
        <WriteBtn onClick={() => setTryLogOut(!tryLogout)}>글쓰기</WriteBtn>
        {/* 밴드 주인이면 */}
        <SettingBtn>밴드 설정</SettingBtn>
      </StoreinfoSideWrapper>
      {tryLogout && <WritePostModal controller={logOutModalControl} />}
    </>
  );
};

export default StoreinfoSide;
