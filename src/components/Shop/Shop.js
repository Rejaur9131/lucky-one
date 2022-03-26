import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (id) => {
    const newCart = [...cart, id];
    setCart(newCart);
  };

  return (
    <div>
      <div className="shop-container row mx-auto">
        <div className="product-container col-12 col-md-9 ">
          <div className="row col-12 row-cols-md-3 mx-auto justify-content-center">
            {products.map((product) => (
              <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
            ))}
          </div>
        </div>
        <div className="cart-container col-12 col-md-3 bg-warning">
          <h5>Cart: {cart.length}</h5>
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
