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