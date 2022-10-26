import React, { useState } from 'react';

import Colors from '@styles/Colors';

import Modal from '..';
import { MapWrapper } from './style';
import KaKaoMap from '@components/KaKaoMap';

function MapModal({ controller }: { controller: ModalController }) {
  const [selectMarket, setSelectMarket] = useState<MarkerProps | null>(null);
  const middleContent = (
    <MapWrapper>
      <KaKaoMap setSelectMarket={setSelectMarket} />
    </MapWrapper>
  );

  const selectLocation = () => {
    if (!selectMarket) {
      alert('시장을 선택해 주세요.');
      return;
    }
    controller.hide();
  };

  return (
    <Modal
      props={{
        middleContent: middleContent,
        title: '시장선택',
        bottomRightButton: {
          text: selectMarket
            ? `${selectMarket.content} 가기`
            : '시장을 선택해주세요',
          color: Colors.Blue,
          onClickHandler: () => {
            selectLocation();
          },
        },
      }}
      controller={controller}
    />
  );
}

export default MapModal;
