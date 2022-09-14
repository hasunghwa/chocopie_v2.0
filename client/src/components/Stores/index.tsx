import React from 'react';
import { StoresWrapper } from './style';
import StoreCard from './StoreCard';
import CategoryMenu from './CategoryMenu';

interface StoreProps {
  id: number;
  name: string;
  mainImg: string;
  introduce: string;
  owner: string;
  address: string;
  phone: string;
}

const Stores = () => {
  const StoreList: StoreProps[] = [
    {
      id: 1,
      name: '가게1',
      mainImg:
        'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 2,
      name: '가게2',
      mainImg:
        'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 3,
      name: '가게3',
      mainImg:
        'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 4,
      name: '가게4',
      mainImg:
        'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
    {
      id: 5,
      name: '가게5',
      mainImg:
        'https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      introduce: '팔아요',
      owner: '나다',
      address: '지구 어딘가',
      phone: '010-3333-3333',
    },
  ];
  return (
    <>
      <CategoryMenu />
      <StoresWrapper>
        {StoreList.map(item => (
          <StoreCard
            key={item.id}
            id={item.id}
            mainImg={item.mainImg}
            introduce={item.introduce}
            name={item.name}
            owner={item.owner}
            address={item.address}
            phone={item.phone}
          ></StoreCard>
        ))}
      </StoresWrapper>
    </>
  );
};

export default Stores;
