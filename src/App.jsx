import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import React, { useState } from 'react';
import SingleProduct from './Pages/SingleProduct';
import CartlistPage from './Pages/CartlistPage';
function App() {
  const [data, setData] = useState(null);
  return (
    <Routes>
      <Route path='/:page?' element={<ProductList />} />
      <Route path='/Product/:id' element={<SingleProduct />} />
      <Route path='/SingleProduct/CartList' element={<CartlistPage />} />
    </Routes >
  );
}
export default App;
