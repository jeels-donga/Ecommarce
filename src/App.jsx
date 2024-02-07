import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Product from './Pages/Product';
import Product1 from './Pages/Product1';
import React, { useState } from 'react';
import Context from './Component/Context';
import Cart from './Pages/Cart';
import CartlistPage from './Pages/CartlistPage';
function App() {
  const [data, setData] = useState(true);
  return (
    <Context.Provider value={{ data, setData }}>
      <Routes>
        {/* <Product1 /> */}
        <Route path='/:page?' element={<Product1 />} />
        <Route path='/Cart/:id' element={<Cart />} />
        <Route path='/Cart/CartList/:product?' element={<CartlistPage />} />
        {/* <Route path='/:page?' element={<Product />} /> */}
      </Routes >
    </Context.Provider>
  );
}
export default App;
