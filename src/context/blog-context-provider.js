import React, { useState, useEffect, createContext } from 'react';

// API
import { getBlogs } from '../services/api';

export const BlogsContext = createContext();

const BlogContextProvider = ({children}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setBlogs(await getBlogs());
        }

        fetchAPI();
    }, []);


    return (
        <BlogsContext.Provider value={blogs}>
            {children}
        </BlogsContext.Provider>
    );
};

export default BlogContextProvider;