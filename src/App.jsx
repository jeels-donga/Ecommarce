import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Product />} />
      <Route path='/' element={<Product1 />} />
    </Routes >
  );
}

export default App;
