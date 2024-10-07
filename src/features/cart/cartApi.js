import axios from "axios";

// A mock function to mimic making an async request for data
export async function  addToCart(item) {
    const response = await axios.post("http://localhost:3000/carts", item)
    return response;
}

export async function  fetchItemsByUserId(userId) {
    try{
        const response = await axios.get(`http://localhost:3000/carts?user=${userId}`)
        return response;
    }catch(error){
        return error.message;
    }
}

export async function  updateCart(item) {
    try {
        const response = await axios.patch(
            `http://localhost:3000/carts/${item.id}`,
            { ...item }, // Send the updated data in the request body
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response;
    } catch (error) {
        return error.message;
    }
}

export async function  deleteItemFromCart(id) {
    try{
        const response = await axios.delete(`http://localhost:3000/carts/${id}`);
        return response;
    }catch(error){
        return error.message;
    }
}