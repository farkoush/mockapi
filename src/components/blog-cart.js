import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount } from '../helper/functions';

// Context
import { CartContext } from '../context/cart-context-provider';

// Icons
import trashIcon from "../assets/icons/trash.svg";

// Style
import classes from "./blog-cart.module.css";

const BlogCart = ({data}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={classes.container} >
            {/* <h3>{shorten(data.title)}</h3> */}
            {console.log('data', data)}
            <h3>{data.email}</h3>
            <div className={classes.linkContainer}>
                {/* <Link to={`/products/${data.id}`}>Details</Link> */}
                <div className={classes.buttonContainer}>
                    {quantityCount(state, data.id) === 1 && <button className={classes.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, data.id) > 1 && <button className={classes.smallButton} onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>}
                    {quantityCount(state, data.id) > 0 && <span className={classes.counter}>{quantityCount(state, data.id)}</span>}
                    {
                        isInCart(state, data.id) ?
                        <button className={classes.smallButton} onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogCart;