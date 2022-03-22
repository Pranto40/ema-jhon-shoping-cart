import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const {handleAddToCart} = props;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Rating : {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;