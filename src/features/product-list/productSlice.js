import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilters } from './productApi';


const initialState = {
    products: [],
    status: 'idle',
    totalItems:0
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
    async ({filter,sort,pagination}) => {
        const response = await fetchAllProductsByFilters(filter, sort,pagination);
        
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
            state.products = action.payload.data;
            state.totalItems = action.payload.items;
            
        });
    },
});

// export const { } = productSlice.actions;

export const selectAllProducts = (state)=>state.product.products;

export default productSlice.reducer;