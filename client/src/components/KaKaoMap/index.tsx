import React, { useCallback, useRef, useState } from 'react';

import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { CustomMapMarker, MarkContent, PostCodeBtn } from './style';
import { AddressToLatlng } from '@utils/addressUtil';
import PostCode from '@utils/postCode';

const KaKaoMap = () => {
  const [center, setCenter] = useState<Coordinate>({
    lat: 33.450701,
    lng: 126.570667,
  });
  const markerRef = useRef<HTMLDivElement[]>([]);

  const positions = [
    {
      content: '카카오',
      latlng: [33.450705, 126.570677],
    },
    {
      content: '생태연못',
      latlng: [33.450936, 126.569477],
    },
    {
      content: '텃밭',
      latlng: [33.450879, 126.56994],
    },
    {
      content: '근린공원',
      latlng: [33.451393, 126.570738],
    },
  ];

  const selectMark = useCallback((latlng: number[]) => {
    console.log(latlng);
  }, []);

  const markOver = useCallback((index: number, isShow: boolean) => {
    if (markerRef.current) {
      markerRef.current[index].style.display = isShow ? 'block' : 'none';
    }
  }, []);

  const handleComplete = async (data: PostCodeReturnData) => {
    const newCenter: Coordinate = await AddressToLatlng(data.address);
    setCenter(newCenter);
  };

  const openPostCode = PostCode({ handleComplete: handleComplete });

  return (
    <>
      <PostCodeBtn onClick={openPostCode}>주소지로 찾기</PostCodeBtn>

      <Map
        center={{ lat: center.lat, lng: center.lng }}
        style={{ width: '100%', height: '400px' }}
      >
        {positions.map((mark, index) => (
          <>
            <CustomMapMarker
              key={index}
              position={{ lat: mark.latlng[0], lng: mark.latlng[1] }}
              onClick={() => selectMark(mark.latlng)}
              onMouseOver={() => markOver(index, true)}
              onMouseOut={() => markOver(index, false)}
            />
            <CustomOverlayMap
              position={{ lat: mark.latlng[0], lng: mark.latlng[1] }}
            >
              <MarkContent
                ref={el => (markerRef.current[index] = el as HTMLDivElement)}
              >
                {mark.content}
              </MarkContent>
            </CustomOverlayMap>
          </>
        ))}
      </Map>
    </>
  );
};

export default KaKaoMap;
