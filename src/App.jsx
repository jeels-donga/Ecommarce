import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Product from './Pages/Product';
import Product1 from './Pages/Product1';
import Cart from './Pages/Cart';
import React from 'react';
function App() {
  return (
    <Routes>
      <Route path='/:page?' element={<Product1 />} />
      {/* <Route path='/:page?' element={<Product />} /> */}
    </Routes >
  );
}
export default App;
