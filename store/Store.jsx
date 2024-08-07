import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./MenuSlicer"
// import menuSlice from "./MenuSlicer";

export const store = configureStore({
    reducer: {
        menu: menuReducer
    }

})