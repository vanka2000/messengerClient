import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats : [],
    messages : [],
    filteredChats : []
}

export const chatSlice = createSlice({
    name : 'chat',
    initialState,
    reducers : {
        getChats : (state, action) => {
            return {...state, chats : action.payload, filteredChats : action.payload}
        },
        addChat : (state, action) => {
            return {...state, chats : action.payload, filteredChats : action.payload}
        },
        getMessages : (state, action) => {
            return {...state, messages : [...action.payload]}
        },
        createMessages : (state, action) => {
            return {...state, messages : [...state.messages, action.payload]}
        },
        filterChats : (state, action) => {
            console.log(action.payload);
            return {...state, filteredChats : [...state.chats.filter(item => {
                return item.members.some(member => member.name.toLowerCase().includes(action.payload.name.toLowerCase()) 
                    && member.name.toLowerCase() !== action.payload.user.name.toLowerCase())
            })]}
        }
    }
})


export default chatSlice.reducer
export const {getChats, addChat, getMessages, createMessages, filterChats} = chatSlice.actions