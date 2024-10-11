import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Main from '../../pages/main/main';
import CatalogTypeOfProducts from '../../pages/catalog-type-of-product/catalog-type-of-product';
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
            path={AppRoute.Search}
            element={<Search/>}
          />
          <Route
            path={AppRoute.Catalog}
            element={<CatalogTypeOfProducts/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
