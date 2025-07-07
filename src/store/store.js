import { configureStore } from "@reduxjs/toolkit";
import userDetail  from "../features/user/userDetailSlice";

export const store =configureStore({
    reducer:{
        app:userDetail,
    },
})