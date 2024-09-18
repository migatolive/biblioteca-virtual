import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "@redux-devtools/extension";

const store = configureStore({
    reducer: {
        // TODO: reducers
    },
});

export default store;