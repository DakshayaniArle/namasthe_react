import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore(
    {
        reducers:{
            user:userReducer,
        }
    }
);

export default appStore