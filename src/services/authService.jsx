import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.migato.live/api/v1',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().user.userToken
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                url: '/user/profile',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetUserDetailsQuery } = authApi