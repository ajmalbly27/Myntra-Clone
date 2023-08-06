import logo from '../../images/Myntra-Logo.png';
import './NavBar.css';
import bag from "../../images/bag.png";
import profile from "../../images/profile-icon.png";
import wishlist from "../../images/Wishlist-Icon.png"
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { BsList, BsX } from "react-icons/bs";

const NavBar = ()  => {
    const { 
        username,
        mobileNumber,
        setMobileNumber,
        cartValue, 
        menFilter, 
        womenFilter, 
        beautyFilter, 
        watchFilter, 
        onSearch,
    } = useContext(CartContext);

    const { allProductFilter,
        mensJeansFilter, 
        menCasualShoes,
        menWatches, 
        womenDresses, 
        womenSaree,
        womenJeans,
        womenCasualShoes, 
        womenWatches, 
        headphones,
        fitnessBands,
        slidersFilter
    } = useContext(CartContext);
    
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMenClick = () => {
        navigate('/');
        menFilter();
    }
    const handleWomenClick = () => {
        navigate('/');
        womenFilter();
    }
    const handleBeautyClick = () => {
        navigate('/');
        beautyFilter();
    }
    const handleWatchesClick = () => {
        navigate('/');
        watchFilter();
    }

    const handleLogout = () => {
        setMobileNumber('');
        navigate('/');
    }

    return(
     <div className="container">
        <div className="left-container">
            <div className="hamburger-icon" onClick={toggleMenu}>
                {showMenu ? <BsX size={35} /> : <BsList size={35} />}
            </div>
            <div>
                <img className='image-logo' src={logo} alt='Myntra-logo'
                    onClick={() => navigate('/')}
                />
            </div>
            <div className={`header-links ${showMenu ? "show" : ""}`}>
                <div className={`hamburger-icon ${showMenu ? "show" : ""}`}>
                    {!mobileNumber 
                        // ?<button className='hamburgur-icon-login-signup-button' onClick={() => navigate('/login')}>LOGIN/SIGNUP</button>
                        ?<div>
                            <div className='welcome-login-text'>Welcome</div>
                            <div className='some-login-text'>To access account and manage orders</div>
                            <button className='login-logout-button' onClick={() => navigate("/login")}>LOGIN/SIGNUP</button>
                        </div>
                        // :<button className='hamburgur-icon-login-signup-button' onClick={handleLogout}>LOGOUT</button>  
                        :<div>
                            <div style={{fontWeight:600}}>Hello {username}</div>
                            <div style={{fontSize:'small',paddingBottom:5,borderBottom:'1px solid grey'}}>{mobileNumber}</div>
                            <div className='navbar-orders-link' style={{marginTop:10}}
                                onClick={() => navigate('/orders')}
                            >Orders</div>
                            <button className='login-logout-button' onClick={handleLogout}>LOGOUT</button>
                        </div>
                    }
                    {showMenu ? <BsX size={35} onClick={toggleMenu}/> : <BsList size={35} />}
                </div>
                {!showMenu && <div className='nav-text' onClick={handleMenClick}><p>MEN</p>{showMenu && <div style={{fontSize:18, marginBottom:10, paddingRight:10}}>&#62;</div>}</div>}
                {!showMenu && <div className='nav-text' onClick={handleWomenClick}><p>WOMEN</p>{showMenu && <div style={{fontSize:18, marginBottom:10, paddingRight:10}}>&#62;</div>}</div>}
                {!showMenu && <div className='nav-text' onClick={handleBeautyClick}><p>BEAUTY</p>{showMenu && <div style={{fontSize:18, marginBottom:10, paddingRight:10}}>&#62;</div>}</div>}
                {!showMenu && <div className='nav-text' onClick={handleWatchesClick}><p>WATCHES</p>{showMenu && <div style={{fontSize:18, marginBottom:10, paddingRight:10}}>&#62;</div>}</div>}
                {showMenu && <div className='navbar-filter-container'>
                    <h3 className='navbar-filter-heading'>Select Your Products</h3>
                    <div className='navbar-filter-text'
                        onClick={allProductFilter}
                    >All</div>            
                    <div className='navbar-filter-text' 
                        onClick={mensJeansFilter}
                    >Mens-Jeans</div>            
                    <div className='navbar-filter-text' 
                        onClick={menCasualShoes}
                    >Men-Casual-Shoes</div>  
                    <div className='navbar-filter-text'
                        onClick={menWatches}
                    >Men-Watches</div>           
                    <div className='navbar-filter-text'
                        onClick={womenDresses}
                    >Womens-Dresses</div>            
                    <div className='navbar-filter-text'
                        onClick={womenSaree}
                    >Women-Sarees</div>            
                    <div className='navbar-filter-text'
                        onClick={womenJeans}
                    >Womens-Jeans</div>            
                    <div className='navbar-filter-text'
                        onClick={womenCasualShoes}
                    >Women-Casual-Shoes</div> 
                    <div className='navbar-filter-text'
                        onClick={womenWatches}
                    >Women-Watches</div>           
                    <div className='navbar-filter-text'
                        onClick={headphones}
                    >Headphones</div>                     
                    <div className='navbar-filter-text'
                        onClick={fitnessBands}
                    >Fitness-Bands</div>                     
                    <div className='navbar-filter-text'
                        onClick={slidersFilter}
                    >Sliders</div>
                </div>}
            </div>
        </div>
        <div className="right-container">
            <div>
                <input type='text' className='search' placeholder='Search for products, brands and more'
                    onChange={(e) => onSearch(e)}
                />
            </div>
            <div className="profile-wishlist-bag">
                <div className='profile-img-wrapper'>
                    <img src={profile} alt='profile-img' className='profile-img'/>
                    <div className='login-logout-wrapper'>
                        {mobileNumber === "" 
                            ?<div>
                                <div className='welcome-login-text'>Welcome</div>
                                <div className='some-login-text'>To access account and manage orders</div>
                                <button className='login-logout-button' onClick={() => navigate("/login")}>LOGIN/SIGNUP</button>
                            </div>
                            :<div>
                                <div style={{fontWeight:600}}>Hello {username}</div>
                                <div style={{fontSize:'small',paddingBottom:5,borderBottom:'1px solid grey'}}>{mobileNumber}</div>
                                <div className='navbar-orders-link' style={{marginTop:10}}
                                    onClick={() => navigate('/orders')}
                                >Orders</div>
                                <button className='login-logout-button' onClick={handleLogout}>LOGOUT</button>
                            </div>
                        }
                    </div>
                </div>
                <div className='wishlist-wrapper'>
                    <img src={wishlist} alt='wishlist-img' onClick={() => navigate('/wishlist')}/>
                </div>
                <div className='bag-wrapper'>
                    <img src={bag} alt='bag-img' onClick={() => navigate('/Cart')}/>
                    {cartValue.length ? <span className="bag-span">{cartValue.length}</span> : null}
                </div>
            </div>
        </div>
     </div>   
    )
}
export default NavBar;