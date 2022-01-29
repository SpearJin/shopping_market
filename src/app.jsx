import Cart from './components/cart/cart';
import './app.css';
import Navbar from './components/navbar/navbar';
import ProductList from './components/productList/productList';

function App() {
  return (
    <div className='app'>
      <Navbar />
      {/* <Cart /> */}
      <ProductList />
    </div>
  );
}

export default App;
