import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('fetch/products', () => {
    // axios.get()
    return [{
        id: 1,
        name: 'Product #1'
    }, {
        id: 2,
        name: 'Product #2'
    }, {
        id: 3,
        name: 'Product #3'
    }, {
        id: 4,
        name: 'Product #4'
    }];
})

const slice = createSlice({
    name: 'products',
    initialState: {
        status: 'idle',
        products: Array<any>(),
        error: null as any,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading';
        })
    },
});

// export const { load } = slice.actions;

export default slice.reducer;
