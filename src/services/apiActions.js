// import dependencies
import axios from "axios";


const axiosBase = async(param = "") => {
    const urlBase = 'https://fakestoreapi.com/products';
    const data = await axios.get(`${urlBase}/${param}`);
    return data.data;
}

// get categories
export const getCategories = async () => {
    return axiosBase('categories');
}
// get all products
export const getAllProducts = async () => {
    return axiosBase();
}
// get single product
export const getSingleProduct = async (id) => {
    return axiosBase(id);
}
// get products by category
export const getProductsByCategory = async (category) => {
        return axiosBase(`category/${category}`);
}