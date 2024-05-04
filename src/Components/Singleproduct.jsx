import React, { useState } from 'react';
import { useContext } from 'react';
import { Cart } from './Context'; 

const SingleProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    setCart([...cart, { ...product, quantity }]);
    setQuantity(1); 
  };

  const handleRemoveFromCart = () => {
    setCart(cart.filter(c => c.id !== product.id));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1); 
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) { 
      setQuantity(quantity - 1); 
    }
  };
  
  const { cart, setCart } = useContext(Cart); 

  return (
    <div className='product-container' key={product.id}>
      <h2>{product.title}</h2>
      <p className='prodDesc'>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount Percentage: {product.discountPercentage}%</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Brand: {product.brand}</p> 
      <p>Category: {product.category}</p>
      <img className='thumbnail' src={product.thumbnail} alt="Thumbnail" /> 
      <div className='image-container'>
        {product.images.slice(0, 4).map(image => (
          <img key={image} src={image} alt="Product" className='product-image' />
        ))}
      </div>
      <div>
        {cart.some(item => item.id === product.id) ? (
          <div>
            <button className='remove-button' onClick={handleRemoveFromCart}>Remove From Cart</button>
          </div>
        ) : (
          <button className='add' onClick={handleAddToCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
