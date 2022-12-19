import React, { useReducer, createContext } from 'react';


export const ModalContext = createContext();
function ModalContextProvider({children}) {
    const initialModal = {
        enableModals: []
    }

    const modalReducer = (state, action) => {
        const {type, payload} = action
        // console.log('state.enableModals', state.enableModals)
        switch (type) {
            case 'SHOW_MODAL':
                state.enableModals.push({slug:payload.metaSlug , index: payload.metaIndex })
                return {
                    ...state,
                    enableModals : [...state.enableModals]
                    // enableModals : state.enableModals
                };

            case 'OFF_MODAL':
                return{
                    ...state,
                    enableModals : []
                }
            default:
                return state
        }
    }
    const [stateModal, dispatchModal] = useReducer(modalReducer,initialModal)
    return (
        <div>
            <ModalContext.Provider value={{stateModal, dispatchModal}}>
                {children}
            </ModalContext.Provider>
        </div>
    );
}

export default ModalContextProvider;