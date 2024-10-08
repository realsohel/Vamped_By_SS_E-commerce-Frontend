import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchAllProductsByFilters, fetchAllCategiores, fetchAllBrands, fetchProductById } from './productApi';


const initialState = {
    products: [],
    selectedproduct:[],
    brands:[],
    categories:[],
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
export const fetchProductByIdAsync = createAsyncThunk(
    'product/fetchProductById',
    async (id) => {
        const response = await fetchProductById(id);
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

export const fetchAllCategoriessAsync = createAsyncThunk(
    'product/fetchAllCategiores',
    async () => {
        const response = await fetchAllCategiores();
        return response.data;
    }
);
export const fetchAllBrandsAsync = createAsyncThunk(
    'product/fetchAllBrands',
    async () => {
        const response = await fetchAllBrands();
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
        })
        .addCase(fetchAllCategoriessAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAllCategoriessAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.categories = action.payload;
        })
        .addCase(fetchAllBrandsAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.brands = action.payload;
        })
        .addCase(fetchProductByIdAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.selectedproduct = action.payload;
        })
    },
});

// export const { } = productSlice.actions;

export const selectAllProducts = (state)=>state.product.products;
export const selectAllBrands = (state)=>state.product.brands;
export const selectAllCategories = (state)=>state.product.categories;
export const getProductById = (state)=>state.product.selectedproduct;

export default productSlice.reducer;