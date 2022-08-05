import React, { useState } from 'react';

import Layout from '@components/Layout';
import CategoryBox from '@components/CategoryBox';
import MapModal from '@components/Modal/Map';
import { MainWrapper, MarketSelectBtn } from './style';
import { MarkerIcon } from '@components/common/Icons';

function Main() {
  const [openMap, setOpenMap] = useState(false);

  const mapModalControl: ModalController = {
    hide: () => setOpenMap(false),
    show: () => setOpenMap(true),
  };

  return (
    <>
      <Layout>
        <MainWrapper>
          <MarketSelectBtn onClick={() => setOpenMap(!openMap)}>
            <MarkerIcon width="21" height="24" />
            <span>시장 선택하러 가기</span>
          </MarketSelectBtn>
          <CategoryBox />
        </MainWrapper>
      </Layout>
      {openMap && <MapModal controller={mapModalControl} />}
    </>
  );
}

export default Main;
