import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OtpPage from './components/OtpPage/OtpPage';
import SignupPage from './components/SignupPage/SignupPage';
import Cart from './components/Cart/Cart';
import { useContext, useEffect } from 'react';
import { CartContext } from './context/CartContext';

function App() {

  const { setAllProducts } = useContext(CartContext);
    
  useEffect(() => {
      console.log("Ajmal Ansari");
      fetch("https://demo3154199.mockable.io/products")
      .then(response => response.json())
      .then(data => {
          // console.log(data);
          console.log(data.products);
          setAllProducts(data);
      })
      // eslint-disable-next-line
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/otppage' element={<OtpPage />}/>
        <Route path='/signuppage' element={<SignupPage />}/>
        <Route path='/cart' element={<Cart />}/>

      </Routes>
    </div>
  );
}

export default App;
