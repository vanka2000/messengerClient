
import { useSelector } from "react-redux"

export default function User (){

    const user = useSelector((state) => state.user.user) //получили данные о Юзере из редакс
    return <div>
       <h1>{user.name}</h1>
    </div>
}



