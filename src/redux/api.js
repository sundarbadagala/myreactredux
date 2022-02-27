import axios from 'axios'

export const fetchProductsData=async()=>{
    return await axios.get('https://fakestoreapi.com/products')
}