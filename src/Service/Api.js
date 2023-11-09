import {io} from 'socket.io-client'


class Api {
    constructor(){
        this.url = 'http://localhost:3000';
        this.socket = io(this.url)
    }

    getMe(){
        this.socket.emit('getMe', localStorage.getItem('token'))
    }

    signIn(body) {
        this.socket.emit('auth', body)   
    }

    createUser(body){
        this.socket.emit('createUser', body)
    }

    logout(){
        this.socket.emit('logout', localStorage.getItem('token'))
    }

    getUsers(){
        this.socket.emit('getUsers', localStorage.getItem('token'))
    }

    addFriend(user){
        this.socket.emit('addFriend', {token : localStorage.getItem('token'), user})
    }

    getChats(idChats){
        this.socket.emit('getChats', {token : localStorage.getItem('token'), idChats})
    }

    getMesseges(idChat){
        this.socket.emit('getMessages', {token : localStorage.getItem('token'), idChat})
    }

    createMessage(idChat, message, user){
        this.socket.emit('createMessage', {token : localStorage.getItem('token'), idChat, message, user})
        
    }

    addMessage({message, user, idChat}){
        this.socket.emit('addMessage', {token : localStorage.getItem('token'), message, user, idChat})
    }


    // deleteUser(){
    //     return fetch(this.url + 'deleteUser', {
    //         headers:{
    //             authorization : localStorage.getItem('token')
    //         },
    //         method: 'DELETE',
    //     })
    //     .then(response => response.json())
    // }


}

const api = new Api()
export default api