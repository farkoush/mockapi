import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';

// Functions
import { shorten, isInCart, quantityCount } from '../helper/functions';

// Context
import { CartContext } from '../context/cart-context-provider';
import { ModalContext } from '../context/modal-context-provider';

// Icons
import trashIcon from "../assets/icons/trash.svg";

// Style
import classes from "./blog-cart.module.scss";

//Components
import Modal from './modal';

const BlogCart = ({data}) => {

    const {state, dispatch} = useContext(CartContext);
    const { stateModal,dispatchModal} = useContext(ModalContext);
    const { enableModals} = stateModal;
    const enableModal = enableModals.find((modal) => modal['slug'] === 'blog' &&  modal['index'] === data.id) 
    
    return (
        <div className={classes.container} >
            <h3>{data.title}</h3>
            <div className={classes.linkContainer}>
                <div className={classes.buttonContainer}>
                    {quantityCount(state, data.id) === 1 && <button className={classes.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><img src={trashIcon} alt="trash" /></button>}
                    {quantityCount(state, data.id) > 1 && <button className={classes.smallButton} onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>}
                    {quantityCount(state, data.id) > 0 && <span className={classes.counter}>{quantityCount(state, data.id)}</span>}
                    {
                        isInCart(state, data.id) ?
                        <button className={classes.smallButton} onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button> :
                        <button 
                            // onClick={() => dispatch({type: "ADD_ITEM", payload: data})}
                            onClick={() => {
                                dispatchModal({type:'SHOW_MODAL', payload:{metaSlug : 'blog', metaIndex:data.id }})   
                            }}
                        >Edit</button>
                    }
                </div>
            </div>
            {enableModal !== undefined &&
                    <Modal title={data.title} metaIndex={data.id}>
                        <div className={classes.buttonContainer}>
                            <button 
                                onClick={() => {

                                }}
                            >
                                Edit
                            </button>
                            <button 
                                onClick={() => {
                                    
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </Modal>
                } 
        </div>
    );
};

export default BlogCart;