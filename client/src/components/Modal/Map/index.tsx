import React from 'react';

import Colors from '@styles/Colors';

import Modal from '..';
import { MapWrapper } from './style';
import KaKaoMap from '@components/KaKaoMap';

function MapModal({ controller }: { controller: ModalController }) {
  const middleContent = (
    <MapWrapper>
      <KaKaoMap></KaKaoMap>
    </MapWrapper>
  );

  const selectLocation = () => {
    console.log('선택');
  };

  return (
    <Modal
      props={{
        middleContent: middleContent,
        title: '시장선택',
        bottomRightButton: {
          text: '선택',
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
