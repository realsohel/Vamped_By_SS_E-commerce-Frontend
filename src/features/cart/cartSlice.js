import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItemFromCart, fetchItemsByUserId, updateCart } from './cartApi';



const initialState = {
    items:[],
    status: 'idle',
    error:null
};

export const addToCartAsync = createAsyncThunk(
    'cart/addToCart',
    async (item) => {
        const response = await addToCart(item);
        return response.data;
    }
);
export const fetchItemsByUserIdAsync = createAsyncThunk(
    'cart/fetchItemsByUserId',
    
    async (userId) => {
        try {
            const response = await fetchItemsByUserId(userId);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const upadteCartAsync = createAsyncThunk(
    'cart/updateCart',
    
    async (itemUpdate) => {
        try {
            const response = await updateCart(itemUpdate);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);
export const deleteItemFromCartAsync = createAsyncThunk(
    'cart/deleteItemFromCart',
    
    async (id) => {
        try {
            const response = await deleteItemFromCart(id);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(addToCartAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(addToCartAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.items.push(action.payload);
        })
        .addCase(addToCartAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error;
        })
        .addCase(fetchItemsByUserIdAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.items = action.payload;
        })
        .addCase(fetchItemsByUserIdAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error;
        })
        .addCase(upadteCartAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(upadteCartAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            const index = state.items.findIndex(item=>item.id===action.payload.id);
            state.items[index] = action.payload;
        })
        .addCase(upadteCartAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error;
        })
        .addCase(deleteItemFromCartAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(deleteItemFromCartAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            const index = state.items.findIndex(item=>item.id===action.payload.id);
            state.items.splice(index,1);
        })
        .addCase(deleteItemFromCartAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.error = action.error;
        })
    },
});

// export const { } = productSlice.actions;
export const selectCart = (state)=>state.cart.items;
export const selectError = (state)=>state.cart.error;

export default cartSlice.reducer;