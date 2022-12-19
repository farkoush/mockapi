import axios from "axios";

const BASE_URL = "https://639f8ad77aaf11ceb89ca380.mockapi.io";

const getBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blogs`);
    return response.data;
}

const updateBlog = async (id, data) => {
    console.log('data.title',data.title)
    const response = await axios.put(`${BASE_URL}/blogs/${id}`,{
        title : data.title
    });
    console.log('response.data', response.data)
    return response.data;
}

export {getBlogs,updateBlog};