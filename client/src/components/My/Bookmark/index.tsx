import React from 'react';

import StoreCard from '@components/Stores/StoreCard';

const Bookmark = () => {
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
    </>
  );
};

export default Bookmark;
