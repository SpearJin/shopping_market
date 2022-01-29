import Cart from './components/cart/cart';
import './app.css';
import Navbar from './components/navbar/navbar';
import ProductInfo from './components/productInfo/productInfo';

function App() {
  return (
    <div className='app'>
      <Navbar />
      {/* <Cart /> */}
      <ProductInfo />
    </div>
  );
}

export default App;
