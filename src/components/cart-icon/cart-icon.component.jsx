import {  useContext } from 'react';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag (1).svg';

import {CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon=()=>{

    const {isCartOpen ,setIsCartOpen}=useContext(CartContext);

    const toggleIsCartOpen =() => setIsCartOpen(!isCartOpen);
    return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <span  className='item-count'>0</span>
    </div>
)
}

export default CartIcon;
