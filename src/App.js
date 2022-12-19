import React from 'react';
import { BlogContextProvider, CartContextProvider, ModalContextProvider } from './context';
import List from './components/list'

function App() {
  return (
    <>
      <BlogContextProvider>
        <ModalContextProvider> 
          <List />
        </ModalContextProvider> 
      </BlogContextProvider>
    </>
  );
}

export default App;
