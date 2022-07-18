import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '@pages/Main';
import GlobalStyle from '@styles/GlobalStyle';
import StoreList from '@pages/StoreList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/storelist/:category" element={<StoreList />} />
      </Routes>
    </div>
  );
}

export default App;
