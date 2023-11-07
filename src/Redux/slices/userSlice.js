import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {}
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        getUserData : (state, action) => {
            return {...state, user : action.payload}
        }
    }
})


export default userSlice.reducer
export const {getUserData} = userSlice.actions