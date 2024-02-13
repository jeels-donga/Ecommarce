import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import React from 'react';
// import SingleProduct from './Pages/SingleProduct';
import SingleProduct1 from './Pages/SingleProduct1';
import CartlistPage from './Pages/CartlistPage';
function App() {
  return (
    <Routes>
      <Route path='/:page?' element={<ProductList />} />
      {/* <Route path='/Product/:id' element={<SingleProduct />} /> */}
      <Route path='/Product/:id' element={<SingleProduct1 />} />
      <Route path='/SingleProduct/CartList' element={<CartlistPage />} />
    </Routes >
  );
}
export default App;
