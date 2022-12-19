import React, { useState, useMemo, useContext } from 'react';
import data from './data/mock-data.json';
import Pagination from './components/pagination';
import { BlogContextProvider, CartContextProvider } from './context';
import BlogCart from './components/blog-cart';
import './App.scss';
// import classes from "./app.module.css";
// Context
import { BlogsContext } from './context/blog-context-provider';

let PageSize = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const blogs = useContext(BlogsContext)
  console.log('blogsss', blogs)

  return (
    <>
      <BlogContextProvider>
      <CartContextProvider>
        {/* <div className={classes.container} > */}
        <div className='container' >
            {currentTableData.map(item => {
              return (
                <BlogCart 
                    key={item.id} 
                    data = {item}
                />
              );
            })}
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </CartContextProvider>
      </BlogContextProvider>
    </>
  );
}

export default App;
