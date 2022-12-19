
import React, {useContext, useEffect} from "react";
import classes from "./modal.module.scss";
import {ModalContext} from '../context/modal-context-provider'

const Modal = ({ children, title, metaIndex }) => {
  const {dispatchModal} = useContext(ModalContext);
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return () => {
        document.body.style.overflow = 'scroll';
        // Anything in here is fired on component unmount.
    }
  }, [])
  
  return (
    <>
      <div className={`${classes['overlay']} modal-overlay`} onClick={(e) => dispatchModal({type:'OFF_MODAL'})} />
      <div className={classes['modal']}>
      <div className={classes['modal-body']}>
          <div className={classes['main']}>
              <header className={classes['custom-top-header']}>
                  <h5>{title}</h5>
                  <span onClick={() => dispatchModal({type:'OFF_MODAL'})}>
                      <i className={`${classes['icon-close']} icon-close`}></i>
                  </span>
              </header>
              {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;