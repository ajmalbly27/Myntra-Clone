import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OtpPage from './components/OtpPage/OtpPage';
import SignupPage from './components/SignupPage/SignupPage';
import Cart from './components/Cart/Cart';
import { useContext, useEffect } from 'react';
import { CartContext } from './context/CartContext';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CheckOutPage from './components/CheckOutPage/CheckOutPage';
import PaymentPage from './components/PaymentPage/PaymentPage';
import WishList from './components/WishList/WishList';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';

function App() {

  const { setAllProducts, setFilteredProducts } = useContext(CartContext);
    
  useEffect(() => {
      fetch("https://demo3154199.mockable.io/products")
      .then(response => response.json())
      .then(data => {
          // console.log(data);
          console.log(data.products);
          setAllProducts(data.products);
          setFilteredProducts(data.products);
      })
      // eslint-disable-next-line
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otppage' element={<OtpPage />} />
        <Route path='/signuppage' element={<SignupPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/checkoutpage' element={<CheckOutPage />} />
        <Route path='/paymentpage' element={<PaymentPage />} />
        <Route path='/orderconfirmation' element={<OrderConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
