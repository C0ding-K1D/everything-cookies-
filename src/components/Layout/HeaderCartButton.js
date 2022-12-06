import React, {useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCTX = useContext(CartContext);

    const numberOfCartItems = cartCTX.items.reduce((sum, item) => {
            return sum + item.amount
    }, 0 );

    const btnClasses = `${classes.button} ${classes.bump} `

    return (
        <button onClick={props.modalHandler} className={btnClasses}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;