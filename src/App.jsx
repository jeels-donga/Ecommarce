import { Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import React from 'react';
import SingleProduct from './Pages/SingleProduct';
import CartlistPage from './Pages/CartlistPage';
import SearchPage from './Pages/SearchPage';
function App() {
  return (
    <Routes>
      <Route path='/:page?' element={<ProductList />} />
      <Route path='/Product/:id' element={<SingleProduct />} />
      <Route path='/SingleProduct/CartList' element={<CartlistPage />} />
      <Route path='/Search/:search/:page?' element={<SearchPage />} />
    </Routes >
  );
}
export default App;
