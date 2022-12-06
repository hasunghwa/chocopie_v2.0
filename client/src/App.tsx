import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from '@styles/GlobalStyle';

const Main = lazy(() => import('@pages/Main'));
const Login = lazy(() => import('@pages/Login'));
const OauthRedirect = lazy(() => import('@pages/OauthRedirect'));
const MyPage = lazy(() => import('@pages/MyPage'));
const StoreList = lazy(() => import('@pages/StoreList'));
const StoreInfo = lazy(() => import('@pages/StoreInfo'));

const Loading = lazy(() => import('@components/common/Loading'));

export const PATH = {
  MAIN: '/',
  LOGIN: '/login',
  GOOGLE_LOGIN_REDIRECT: '/login/redirect',
  MYPAGE: '/my/:category',
  STORE_LIST: '/storelist/:category',
  STORE_INFO: '/storeinfo/:id',
};

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route
            path={PATH.GOOGLE_LOGIN_REDIRECT}
            element={<OauthRedirect />}
          />
          <Route path={PATH.MYPAGE} element={<MyPage />} />
          <Route path={PATH.STORE_LIST} element={<StoreList />} />
          <Route path={PATH.STORE_INFO} element={<StoreInfo />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
