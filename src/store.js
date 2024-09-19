import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "@redux-devtools/extension"
import authReducer from './features/auth/authSlice'
import { authApi } from "./services/authService.jsx";

const store = configureStore({
    reducer: {
        user: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
    devTools: composeWithDevTools()
})

export default store;