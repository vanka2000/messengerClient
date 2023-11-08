import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats : [],
    messages : []
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
        },
        getMessages : (state, action) => {
            return {...state, messages : [...state.messages, ...action.payload]}
        },
        createMessages : (state, action) => {
            return {...state, messages : [...state.messages, action.payload]}
        }
    }
})


export default chatSlice.reducer
export const {getChats, addChat, getMessages, createMessages} = chatSlice.actions