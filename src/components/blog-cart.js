import React, { useContext, useState } from 'react';

// APIs
import { updateBlog } from '../services/api';

// Context
import { ModalContext } from '../context/modal-context-provider';

// Icons
import trashIcon from "../assets/icons/trash.svg";

// Style
import classes from "./blog-cart.module.scss";

//Components
import Modal from './modal';

const BlogCart = ({data}) => {
    const [modalSlug,setModalSlug] = useState('')
    const [values,setValues] = useState()

    const { stateModal,dispatchModal} = useContext(ModalContext);
    const { enableModals} = stateModal;
    const enableModal = enableModals.find((modal) => modal['slug'] === modalSlug &&  modal['index'] === data.id) 
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Callback function when form is submitted!");
        updateBlog(data.id, values)
        dispatchModal({type:'OFF_MODAL'})
    }
    const handleChange = (event) => {
        //Let's set these values in state
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        })

    }
    return (
        <div className={classes.container} >
            <h3>{data.title}</h3>
            <div className={classes.linkContainer}>
                <div className={classes.buttonContainer}>
                    {
                        <>
                            <button 
                                onClick={() => {
                                    setModalSlug('blog-edit')
                                    dispatchModal({type:'SHOW_MODAL', payload:{metaSlug : 'blog-edit', metaIndex:data.id }})   
                                }}
                            >
                                Edit
                            </button>
                            
                            <button 
                                onClick={() => {
                                    setModalSlug('blog-delete')
                                    dispatchModal({type:'SHOW_MODAL', payload:{metaSlug : 'blog-delete', metaIndex:data.id }})   
                                }}
                            >
                                Remove
                            </button>
                        </>
                        
                    }
                </div>
            </div>
            {enableModal !== undefined &&
            <>
                    {

                        modalSlug === 'blog-edit' ? (
                        <Modal title={data.title} metaIndex={data.id}>
                            <div className={classes.buttonContainer}>
                            <form onSubmit={onSubmitHandler} id={`edit-form`}>
                                <div className={classes['modal-inner']}>
                                    <input      
                                        name={`title`} 
                                        placeHolder='Blog Title'
                                        type='text' 
                                        onChange = {handleChange}
                                        className = {classes['input-text']}
                                        defaultValue = {data.title}
                                        onFocus = {event =>  event.target.select()}
                                    />
                                    <button 
                                        type="submit" 
                                        className={`${classes['btn']} ${classes['confirm']} confirm`}
                                    >
                                        Save
                                    </button>                            
                                </div>
                            </form>
                            </div>
                        </Modal>

                        ) : (
                            <Modal title={data.title} metaIndex={data.id}>
                                <div className={classes.buttonContainer}>
                                    remove
                                </div>
                            </Modal>
                        )
                    }
                    
            </>
                } 
        </div>
    );
};

export default BlogCart;