import Cart from './components/cart/cart';
import './app.css';
import Navbar from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('list');
  const rnderPage = page === 'list' ? <ProductList /> : <Cart />;
  return (
    <div className='app'>
      <Navbar setPage={setPage} />
      {rnderPage}
    </div>
  );
}

export default App;
