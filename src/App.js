import React from 'react';
import { BlogContextProvider, CartContextProvider } from './context';
import List from './components/list'

function App() {
  return (
    <>
      <BlogContextProvider>
      <CartContextProvider>
        <List />
      </CartContextProvider>
      </BlogContextProvider>
    </>
  );
}

export default App;
