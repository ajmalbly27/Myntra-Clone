import { useContext } from 'react';
import './Filter.css';
import { CartContext } from '../../context/CartContext';

const Filter = () => {

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

    return(
        <div className='filter-holder'>
            <h3 className='filter-heading'>Select Your Products</h3>
            <div className='filter-text'
                onClick={allProductFilter}
            >All</div>            
            <div className='filter-text' 
                onClick={mensJeansFilter}
            >Mens-Jeans</div>            
            <div className='filter-text' 
                onClick={menCasualShoes}
            >Men-Casual-Shoes</div>  
            <div className='filter-text'
                onClick={menWatches}
            >Men-Watches</div>           
            <div className='filter-text'
                onClick={womenDresses}
            >Womens-Dresses</div>            
            <div className='filter-text'
                onClick={womenSaree}
            >Women-Sarees</div>            
            <div className='filter-text'
                onClick={womenJeans}
            >Womens-Jeans</div>            
            <div className='filter-text'
                onClick={womenCasualShoes}
            >Women-Casual-Shoes</div> 
            <div className='filter-text'
                onClick={womenWatches}
            >Women-Watches</div>           
            <div className='filter-text'
                onClick={headphones}
            >Headphones</div>                     
            <div className='filter-text'
                onClick={fitnessBands}
            >Fitness-Bands</div>                     
            <div className='filter-text'
                onClick={slidersFilter}
            >Sliders</div>                     
        </div>
    )
}
export default Filter;