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

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handleChooseAgain = () => {
    const emptyCart = [];
    setCart(emptyCart);
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
          <h3>Cart: {cart.length}</h3>
          {cart.map((item) => (
            <Cart key={item.id} item={item} handleChooseAgain={handleChooseAgain}></Cart>
          ))}
          <button onClick={handleChooseAgain} className="btn btn-outline-dark">
            Choose Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
