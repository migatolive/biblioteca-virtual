import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import { authApi } from "./services/authService.jsx";
import { bookApi } from "./services/bookService.jsx";

const store = configureStore({
    reducer: {
        user: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [bookApi.reducerPath]: bookApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, bookApi.middleware),
    devTools: true,
})

export default store