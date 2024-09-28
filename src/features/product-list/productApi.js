import axios from "axios";

// A mock function to mimic making an async request for data
export async function  fetchAllProducts() {
    const response = await axios.get("http://localhost:3000/products")
    return response;
}
export async function  fetchAllProductsByFilters(filter) {

    let queryString="";
    for(let key in filter){
        queryString+=`${key}=${filter[key]}&`;
    }
    const response = await axios.get("http://localhost:3000/products?"+queryString)
    return response;
}