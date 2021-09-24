import React from 'react';
import './App.css';
import Products from "./components/Products";
import Product from "./components/Product";
import {ProductType} from "./state";
import styled from "styled-components";
import ClearIcon from "./components/icons/ClearIcon";
import {useDispatch} from "react-redux";
import {clearCart} from "./state/cart/actions";
import Button from "./components/Button";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <PageTitle>Grocery list</PageTitle>
      <Products>
        <Product name={ProductType.Cucumber}/>
        <Product name={ProductType.Potato}/>
        <Product name={ProductType.Pumpkin}/>
      </Products>

      <CartActions>
        <Button
          onClick={() => dispatch(clearCart())}
        >
          <ClearIcon/>
          Clear
        </Button>
      </CartActions>

      <Cart/>
    </div>
  );
}

const PageTitle = styled.h1`
  text-align: center;
`;

const CartActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default App;
