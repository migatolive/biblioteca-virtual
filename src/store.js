import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import { authApi } from "./services/authService.jsx";
import bookReducer from './features/book/bookSlice'

const store = configureStore({
    reducer: {
        user: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        book: bookReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
    devTools: true,
})

export default store