import Cart from './components/cart/cart';
import './app.css';
import Navbar from './components/navbar/navbar';
import ProductList from './components/productList/productList';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('list');
  const [isLogin, setIsLogin] = useState(false);
  const renderPage = page === 'list' ? <ProductList /> : <Cart />;

  return (
    <div className='app'>
      <Navbar setPage={setPage} isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? renderPage : <p className='isLogin'>로그인 하세요...</p>}
    </div>
  );
}

export default App;
