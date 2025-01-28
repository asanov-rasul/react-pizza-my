import React from 'react';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import './App.css';
import Categories from './components/Categories';
import Header from './components/Header';
import Sort from './components/Sort';
import Products from './components/Products';
import Cart from './components/Cart';
import CartEmpty from './components/CartEmpty'
import pizzaData from "./pizzaData.json";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setcartPrice] = useState(0);
  const [filterPizzas, setFilterPizzas] = useState(pizzaData.sort((a, b) => b.rating - a.rating));

  return (
    <BrowserRouter>
      <div>
        <div className="wrapper">
        <Header cartCount={cartCount} cartPrice={cartPrice}/>
        <div className="content">
          <div className="container">
            <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div className="content__top">
                        <Categories pizzas={pizzaData} setFilterPizzas={setFilterPizzas} />
                        <Sort setFilterPizzas={setFilterPizzas} filterPizzas={filterPizzas} />
                      </div>
                      <h2 className="content__title">Все пиццы</h2>
                      <Products
                        filterPizzas={filterPizzas}
                        setCartCount={setCartCount}
                        cartCount={cartCount}
                        setcartPrice={setcartPrice}
                        cartPrice={cartPrice}
                        pizzas={pizzaData}
                      />
                    </>
                  }
                />
                <Route
                  path="/cart"
                  element={<Cart cartCount={cartCount} cartPrice={cartPrice} setCartCount={setCartCount} setcartPrice={setcartPrice}/>}
                />
                <Route
                  path="/cart-empty"
                  element={<CartEmpty/>}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
