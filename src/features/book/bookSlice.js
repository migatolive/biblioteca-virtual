import { createSlice } from '@reduxjs/toolkit';
import { createBook } from './bookActions';

const initialState = {
    loading: false,
    books: [],
    error: null,
    success: false,
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(createBook.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(createBook.fulfilled, (state, action) => {
                state.loading = false;
                state.books.push(action.payload);
                state.success = true;
            })
            .addCase(createBook.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.success = false;
            });
    },
});

export default bookSlice.reducer;
