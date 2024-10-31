import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.migato.live/api/v1',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.userToken;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book',
        }),
        getBook: builder.query({
            query: (id) => `/book/${id}`,
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: '/book',
                method: 'POST',
                body: bookData,
            }),
        }),
    }),
});

export const { useGetBooksQuery, useGetBookQuery, useCreateBookMutation } = bookApi;