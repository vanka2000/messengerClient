import style from './modal.module.css'
import api from '../../Service/Api'


export default function SearchingUser({item}){
    
    function addFriend(){
        api.addFriend(item.name)
    }


    return <div className={style.user}>
        {item.name}
        <button onClick={addFriend} className={style.add_friend}>Создать чат</button>
    </div>
}