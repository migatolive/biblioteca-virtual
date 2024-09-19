import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, registerUser, loginUser } from "./authActions.jsx";

const userToken = localStorage.getItem('userToken') || null;

const initialState = {
    loading: false,
    userInfo: null,
    userToken,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('userToken');
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        },
        setCredentials: (state, action) => {
            state.userToken = action.payload
        },
    },
    extraReducers: builder => {
        builder
            // loginUser
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { token, user } = action.payload
                const { accessToken } = token

                state.loading = false;
                state.userInfo = user
                state.userToken = accessToken
                localStorage.setItem('userToken', accessToken)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // registerUser
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false
                state.success = true
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // getUserDetails
            .addCase(getUserDetails.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.loading = false
                state.userInfo = action.payload
            })
            .addCase(getUserDetails.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})

export const { logout, setCredentials } = authSlice.actions
export default authSlice.reducer