import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authApi';


const initialState = {
    loggedInUser:null,
    status: 'idle',
    error:null
};

export const createUserAsync = createAsyncThunk(
    'user/createUser',
    async (user) => {
        const response = await createUser(user);
        return response.data;
    }
);
export const checkUserAsync = createAsyncThunk(
    'user/checkUser',
    async (user) => {
        const response = await checkUser(user);
        return response.data;
    }
);

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUserAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createUserAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInUser = action.payload;
        })
        .addCase(checkUserAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(checkUserAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInUser = action.payload;
            console.log(state.loggedInUser)
        })
        .addCase(checkUserAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error;
        })
    },
});

// export const { } = productSlice.actions;
export const selectloggedInUser = (state)=>state.auth.loggedInUser;
export const selectError = (state)=>state.auth.error;

export default authSlice.reducer;