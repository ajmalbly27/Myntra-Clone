import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import OtpPage from './components/OtpPage/OtpPage';
import SignupPage from './components/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/otppage' element={<OtpPage />}/>
        <Route path='/signuppage' element={<SignupPage />}/>

      </Routes>
    </div>
  );
}

export default App;
