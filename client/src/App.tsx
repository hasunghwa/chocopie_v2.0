import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '@pages/Main';
import GlobalStyle from '@styles/GlobalStyle';
import StoreList from '@pages/StoreList';
import StoreInfo from '@pages/StoreInfo';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/storelist/:category" element={<StoreList />} />
        <Route path="/storeinfo/:id" element={<StoreInfo />} />
      </Routes>
    </div>
  );
}

export default App;
