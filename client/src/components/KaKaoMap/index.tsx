import React, {
  useCallback,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { Map, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { CustomMapMarker, MarkContent, PostCodeBtn } from './style';
import { AddressToLatlng } from '@utils/addressUtil';
import PostCode from '@utils/postCode';
import MARKET from '@lib/db/market.json';

interface KaKaoMapProps {
  setSelectMarket: Dispatch<SetStateAction<MarkerProps | null>>;
}

const KaKaoMap = ({ setSelectMarket }: KaKaoMapProps) => {
  const [center, setCenter] = useState<Coordinate>({
    lat: 34.76425614,
    lng: 127.6641226,
  });

  const markerRef = useRef<HTMLDivElement[]>([]);

  const positions = MARKET.records.map((el, index) => {
    return { id: index, content: el.시장명, latlng: [el.위도, el.경도] };
  });

  const selectMark = useCallback((mark: MarkerProps) => {
    setSelectMarket(mark);
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
        {positions.map((mark: MarkerProps) => (
          <React.Fragment key={mark.id}>
            <CustomMapMarker
              position={{ lat: +mark.latlng[0], lng: +mark.latlng[1] }}
              onClick={() => selectMark(mark)}
              onMouseOver={() => markOver(mark.id, true)}
              onMouseOut={() => markOver(mark.id, false)}
            />
            <CustomOverlayMap
              position={{ lat: +mark.latlng[0], lng: +mark.latlng[1] }}
            >
              <MarkContent
                ref={el => (markerRef.current[mark.id] = el as HTMLDivElement)}
              >
                {mark.content}
              </MarkContent>
            </CustomOverlayMap>
          </React.Fragment>
        ))}
      </Map>
    </>
  );
};

export default KaKaoMap;
