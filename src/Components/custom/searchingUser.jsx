import style from './modal.module.css'
import api from '../../Service/Api'
import { useEffect } from 'react'
import {useSelector} from 'react-redux'
export default function SearchingUser({item}){

    const user = useSelector(state => state.user.user)

    useEffect(() => {
        console.log(user);
    }, )
    
    function addFriend(){
        api.addFriend(item.name)
    }


    return <div className={style.user}>
        {item.name}
        <button onClick={addFriend} className={style.add_friend}>Добавить в друзья</button>
    </div>
}