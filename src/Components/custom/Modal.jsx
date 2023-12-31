import { useEffect } from 'react'
import style from './modal.module.css'
import React from 'react'
import api from '../../Service/Api'
import SearchingUser from './searchingUser'
import { useSelector } from 'react-redux'



export default function Modal({setOpen}){

    const user = useSelector(state => state.user.user)
    const [allUsers, setAllUsers] = React.useState([])
    const [arrFilteredUsers, setArrFilteredUsers] = React.useState([])
    useEffect(() => {
        api.getUsers()
        api.socket.on('getUsers', ({allUsers, message, err}) => {
            if(err) return console.error(message, err)
            setAllUsers(allUsers)
        })
      
    }, [])

    function SearchUser(e){
        e.preventDefault()
        const {search} = e.target.elements
        const str = search.value
        if(str === '') return
        setArrFilteredUsers(allUsers.filter(item => item.name.toLowerCase() !== user.name.toLowerCase() 
            && item.name.toLowerCase().includes(str.toLowerCase())))
    }


    return<>
        <div className={style.modal} onClick={e => {
            if(e.target.classList.contains(style.modal)) setOpen(false)
        }}>
            <div className={style.modal_content}>
                <form onSubmit={SearchUser} className={style.form_search_friends}>
                    <input name='search'></input>
                    <button className={style.btn_find}>Найти</button>
                </form>
                <div className={style.users}>
                    {arrFilteredUsers.map((item, index) => {
                        return <div className={style.user} key={index}>
                            <SearchingUser item={item}/>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </>
    
}