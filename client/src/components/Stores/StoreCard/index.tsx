import React from 'react';
import { Link } from 'react-router-dom';
import { StoreWrapper, StoreImg, StoreInfo, StoreOwnerInfo } from './style';

interface StoreProps {
  id: number;
  name: string;
  mainImg: string;
  introduce: string;
  owner: string;
  address: string;
  phone: string;
}

const StoreCard = ({
  id,
  name,
  mainImg,
  introduce,
  owner,
  address,
  phone,
}: StoreProps) => {
  return (
    <StoreWrapper>
      <Link to={`/storeinfo/${id}`}>
        <StoreImg src={mainImg} />
      </Link>
      <StoreInfo>
        <Link to={`/storeinfo/${id}`}>
          <h2>{name}</h2>
        </Link>
        <span>{introduce}</span>
      </StoreInfo>

      <StoreOwnerInfo>
        <h3>{owner}</h3>
        <p>
          {address}
          <br />
          {phone}
        </p>
      </StoreOwnerInfo>
    </StoreWrapper>
  );
};

export default StoreCard;
