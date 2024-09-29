import axios from "axios";

// A mock function to mimic making an async request for data
export async function  fetchAllProducts() {
    const response = await axios.get("http://localhost:3000/products")
    return response;
}
export async function  fetchAllProductsByFilters(filter,sort,pagination) {

    let queryString="";
    for(let key in filter){
        let categories = filter[key];

        if(categories.length){
            const cateValues = categories[categories.length-1];
            queryString+=`${key}=${cateValues}&`;
        }
    }
    
    for(let key in sort){
        queryString+=`${key}=${sort[key]}&`;
    }
    for(let key in pagination){
        queryString+=`${key}=${pagination[key]}&`;
    }
    const response = await axios.get("http://localhost:3000/products?"+queryString)
    console.log(response.data);
    return response;
}