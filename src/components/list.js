import React, { useState, useMemo, useContext } from 'react';
import BlogCart from './blog-cart';
import Pagination from './pagination';
import { BlogsContext } from '../context/blog-context-provider';
import './list.scss';

let PageSize = 5;
function List(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const blogs = useContext(BlogsContext)
    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return blogs.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
    <>
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
              totalCount={blogs.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
    </>
    );
}

export default List;