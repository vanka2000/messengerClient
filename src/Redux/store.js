import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export default configureStore ({
    reducer : {   //место подключение для слайсов (слайсы - набор функций для управления состояниями)
        user : userSlice,
    }
})

