import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import PageOulet from './Component/PageOulet';
// import Home from './Pages/Home';
// import ProductID from './Pages/ProductID';
import Product from './Pages/Product';
function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<PageOulet />}> */}
      {/* <Route path='/' element={<Home />} /> */}
      {/* <Route path='/pageitems/:limit' element={<ProductID />} /> */}
      <Route path='/' element={<Product />} />
      {/* </Route> */}
    </Routes >
  );
}

export default App;
