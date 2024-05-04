import React, { useContext, useState, useEffect } from 'react';
import Singleproduct from './Singleproduct';
import './style.css';
import { Cart } from './Context'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  
console.log(useContext(Cart));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/PragathiShenoy/json_data/main/product.json');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched data:', data);
          setProducts(data.products);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setProducts([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='productContainer'>
      {products.map(product => (
        <Singleproduct key={product.id} product={product}  />
      ))}
    </div>
  );
};

export default Home;
