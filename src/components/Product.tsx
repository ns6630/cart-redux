import AddIcon from "./AddIcon";
import RemoveIcon from "./RemoveIcon";
import {useDispatch, useSelector} from "react-redux";
import {AppState, ProductType} from "../state";
import {addProduct, removeProduct} from "../state/cart/actions";
import styled from "styled-components";
import IconButton from "./IconButton";
import ProductCounter from "./ProductCounter";

export interface ProductProps {
  name: ProductType;
}

export default function Product({name}: ProductProps) {
  const count = useSelector((state: AppState) => state.cart.products[name]) || 0;
  const dispatch = useDispatch();


  return (
    <StyledProduct>
      <ProductName>{name}</ProductName>
      <ProductActions>
        <IconButton onClick={() => dispatch(addProduct(name))}>
          <AddIcon/>
        </IconButton>
        <ProductCounter>{count}</ProductCounter>
        <IconButton onClick={() => dispatch(removeProduct(name))}>
          <RemoveIcon/>
        </IconButton>
      </ProductActions>
    </StyledProduct>
  )
}

const StyledProduct = styled.div``;

const ProductName = styled.div`
  background: #a4d166;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-right: 20px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;