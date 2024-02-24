import { Route, Routes } from 'react-router-dom';
import ProductList from './Pages/ProductList';
import React from 'react';
import SingleProduct from './Pages/SingleProduct';
import CartlistPage from './Pages/CartlistPage';
import SearchPage from './Pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Category from './Pages/Category';
import PageLayOut from './Pages/PageLayOut';
function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLayOut />}>
        <Route path='/:page?' element={<ProductList />} />
        <Route path='/Product/:id' element={<SingleProduct />} />
        <Route path='/SingleProduct/CartList' element={<CartlistPage />} />
        <Route path='/Search/:search/:page?' element={<SearchPage />} />
        <Route path='/category/:categorys/:page?' element={<Category />} />
      </Route>


    </Routes >
  );
}
export default App;
