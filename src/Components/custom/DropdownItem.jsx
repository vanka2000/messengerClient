import style from './dropdownitem.module.css'
import { useNavigate } from "react-router-dom";
import api from '../../Service/Api'


export default function DropdownItem({children}){
   


    
    const navigate = useNavigate()


    function deleteUs(){
        api.deleteUser()
        .then((responce) => {
            navigate('/signIn')
            console.log(responce)
            localStorage.clear()
        })
    }
   
    return(

        <a href="" className={style.menu_item}>
            <span></span>
            {children}
            <button className={style.btn_delete_accaunt} onClick={deleteUs}>Удалить аккаунт</button>
            <span></span>
        </a>
    )
}