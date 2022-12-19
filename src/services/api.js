import axios from "axios";

const BASE_URL = "https://639f8ad77aaf11ceb89ca380.mockapi.io";

const getBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blogs`);
    return response.data;
}

const updateBlog = async (id, data) => {
    const response = await axios.put(`${BASE_URL}/blogs/${id}`,{
        title : data.title
    });
    return response.data;
}

const RemoveBlog = async (id, data) => {
    const response = await axios.delete(`${BASE_URL}/blogs/${id}`);
    return response.data;
}

export {getBlogs,updateBlog,RemoveBlog};