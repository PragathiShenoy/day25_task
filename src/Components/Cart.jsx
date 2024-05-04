import React, { useState, useEffect, useContext } from 'react';
import SingleProduct from './Singleproduct';
import { Cart } from './Context'; 

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Cart); 

  useEffect(() => {
    const newTotal = cart.reduce((acc, curr) => acc + Number(curr.price), 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <div>
      <h2>My Cart</h2>
      <span>Total: ${total}</span>
      <div className='productContainer'>
        {cart.map(product => (
          <SingleProduct
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
