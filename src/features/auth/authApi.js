import axios from "axios";

// A mock function to mimic making an async request for data
export async function  createUser(user) {
    const response = await axios.post("http://localhost:3000/users", user)
    return response;
}

export async function  checkUser(user) {
    const email = user.email;
    const password = user.password;
    try {
        const response = await axios.get(`http://localhost:3000/users?email=${email}`);
        // If response has data, return it
        console.log(response)
        if (!(response.data && response.data.length)) {
            throw new Error("Data not found");
        } 

        if(!(response.data[0].password===password)){
            throw new Error("Incorrect Password");
        }
        return response;
    } catch (error) {
        // Catching and handling the error
        console.log(error.message)
        throw new Error(error.message || "An error occurred");
    }
    
}