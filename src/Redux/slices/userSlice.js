import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {}
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        getUserData : (state, action) => {
            console.log(action.payload);
            return {...state, user : action.payload}
        },
        addFriends : (state, action) => {
            return {...state, user : {...state.user, friends : [...state.user.friends, action.payload]}}
        }
    }
})


export default userSlice.reducer
export const {getUserData, addFriends} = userSlice.actions