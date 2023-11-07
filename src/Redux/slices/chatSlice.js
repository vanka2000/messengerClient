import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats : []
}

export const chatSlice = createSlice({
    name : 'chat',
    initialState,
    reducers : {
        getChats : (state, action) => {
            return {...state, chats : [...state.chats, ...action.payload]}
        },
        addChat : (state, action) => {
            return {...state, chats : [...state.chats, action.payload]}
        }
    }
})


export default chatSlice.reducer
export const {getChats, addChat} = chatSlice.actions