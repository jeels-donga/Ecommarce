import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Product1 from './Pages/Product1';
function App() {
  return (
    <Routes>
      <Route path='/:page?' element={<Product />} />
    </Routes >
  );
}

export default App;
