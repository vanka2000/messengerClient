import style from './modal.module.css'
import api from '../../Service/Api'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addFriends } from '../../Redux/slices/userSlice'
export default function SearchingUser({item}){

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    console.log(user);
    useEffect(() => {
        api.socket.on('addFriend', (user) => {console.log(user)})
    }, [])

    function addFriend(){
        dispatch(addFriends(user._id))
        api.addFriend(user)
    }


    return <div className={style.user}>
        {item.name}
        <button onClick={addFriend} className={style.add_friend}>Добавить в друзья</button>
    </div>
}