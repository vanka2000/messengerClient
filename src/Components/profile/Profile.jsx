import style from './profile.module.css'
import { useNavigate } from "react-router-dom";
import User from '../User/User';

import api from '../../Service/Api'
import { useEffect } from 'react';

export default function Profile({active, setActive, children}){
    const navigate = useNavigate()

    useEffect(() => {
        api.socket.on('logout', (msg, err, message) => {
            if(err) console.error(err, message)
            localStorage.clear()
            navigate('/signIn')
        })
    })


    function logOut (){
        api.logout()
    }
return(
        <div className={style.modal_content}>
        <User/>
        <button onClick={logOut} className={style.modal_content_logout} ><p>Выйти из аккаунта</p></button>
        </div>
)
}
