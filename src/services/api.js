import axios from "axios";

const BASE_URL = "https://639f8ad77aaf11ceb89ca380.mockapi.io";

const getBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blogs`);
    return response.data;
}

export {getBlogs};