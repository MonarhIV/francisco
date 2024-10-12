import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Main from '../../pages/main/main';
import CatalogTypeOfProducts from '../../pages/catalog-type-of-product/catalog-type-of-product';
import TradeIn from '../../pages/trade-in/trade-in';

import { AppRoute } from '../../const';

function App(telegramEnv: any): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main/>}
          />
          <Route
            path={AppRoute.Catalog}
            element={<CatalogTypeOfProducts/>}
          />
          <Route
            path={AppRoute.TradeIn}
            element={<TradeIn/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
