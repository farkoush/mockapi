import React from 'react';
import { BlogContextProvider, CartContextProvider, ModalContextProvider } from './context';
import List from './components/list'

function App() {
  return (
    <>
      <BlogContextProvider>
      <CartContextProvider>
        <ModalContextProvider> 
          <List />
        </ModalContextProvider> 
      </CartContextProvider>
      </BlogContextProvider>
    </>
  );
}

export default App;
