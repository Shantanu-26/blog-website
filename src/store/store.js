import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import conf from "../conf/conf"

const store=configureStore({
    reducer: {
        auth: authSlice
    }
})

export default store