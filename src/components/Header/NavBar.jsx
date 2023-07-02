import logo from '../../images/Myntra-Logo.png';
import './NavBar.css';
import bag from "../../images/bag.png";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const NavBar = ()  => {
    const { cartValue, menFilter, womenFilter, beautyFilter, watchFilter } = useContext(CartContext);
    const navigate = useNavigate();

    return(
     <div className="container">
        <div className="left-container">
            <div>
                <img className='image-logo' src={logo} alt='Myntra-logo'
                    onClick={() => navigate('/')}
                />
            </div>
            <div className='header-links'>
                <div className='nav-text'><p onClick={menFilter}>MEN</p></div>
                <div className='nav-text'><p onClick={womenFilter}>WOMEN</p></div>
                <div className='nav-text'><p onClick={beautyFilter}>BEAUTY</p></div>
                <div className='nav-text'><p onClick={watchFilter}>WATCHES</p></div>
            </div>
        </div>
        <div className="right-container">
            <div>
                <input type='text' className='search' placeholder='Search for products, brands and more'/>
            </div>
            <div className="profile-wishlist-bag">
                <div className='bag-wrapper'>
                    <img src={bag} alt='bag-img' onClick={() => navigate('/Cart')}/>
                    {cartValue.length ? <span className="bag-span">{cartValue.length}</span> : null}
                </div>
                <button className='login-logout-button' onClick={() => navigate("/login")}>LOGIN</button>
            </div>
        </div>
     </div>   
    )
}
export default NavBar;