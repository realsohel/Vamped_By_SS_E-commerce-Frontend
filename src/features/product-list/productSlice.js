import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilters } from './productApi';


const initialState = {
    products: [],
    status: 'idle',
};

export const fetchAllProductsAsync = createAsyncThunk(
    'product/fetchAllProducts',
    async () => {
        const response = await fetchAllProducts();
        return response.data;
    }
);
export const fetchAllProductsBYFiltersAsync = createAsyncThunk(
    'product/fetchAllProductsByFilters',
    async (filter) => {
        const response = await fetchAllProductsByFilters(filter);
        return response.data;
    }
);

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProductsAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products = action.payload;
        })
        .addCase(fetchAllProductsBYFiltersAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAllProductsBYFiltersAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products = action.payload;
        });
    },
});

// export const { } = productSlice.actions;

export const selectAllProducts = (state)=>state.product.products;

export default productSlice.reducer;