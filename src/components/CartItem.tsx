import {AppState, ProductType} from "../state";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import AddIcon from "./AddIcon";
import IconButton from "./IconButton";
import RemoveIcon from "./RemoveIcon";
import {addProduct, deleteProduct, removeProduct} from "../state/cart/actions";
import ProductCounter from "./ProductCounter";
import ClearIcon from "./ClearIcon";

export interface CartItemProps {
  name: ProductType;
}

export default function CartItem({name}: CartItemProps) {
  const dispatch = useDispatch();
  const count = useSelector((state: AppState) => state.cart.products[name]) || 0;

  return (
    <StyledCartItem>
      <CartItemName>
        {name}
      </CartItemName>
      <CartItemActions>
        <IconButton onClick={() => dispatch(addProduct(name))}><AddIcon/></IconButton>
        <ProductCounter>{count}</ProductCounter>
        <IconButton onClick={() => dispatch(removeProduct(name))}><RemoveIcon/></IconButton>
        <IconButton onClick={() => dispatch(deleteProduct(name))}><ClearIcon/></IconButton>
      </CartItemActions>
    </StyledCartItem>
)
}

const StyledCartItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
`;

const CartItemName = styled.div`
  margin-right: 10px;
`;

const CartItemActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;