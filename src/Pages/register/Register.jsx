import { Link, useNavigate } from "react-router-dom";
import './register.module.css'
import api from "../../Service/Api";
import style from './register.module.css'


export default function Register(){
    
    const navigate = useNavigate()
    const regData = function(event){
        event.preventDefault() //сбрасывает настройки сабмит
        const [name,email,password] = Array.from(event.target).map((item) => item.value)
        const regObjData = {name,email,password}
        api.createUser(regObjData)
        api.socket.on('createUser', () => navigate('/signIn'))
    }



    return <div className={style.register_conteiner}>

<div className={style.area} >
            <ul className={style.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
   
        
        <form className={style.form_register} onSubmit={regData}> 
        <h1 className={style.title}>Registration</h1>
        <label id="name">
            
            <input placeholder="" name="name" type="text" /> 
            <span>Name</span>
        </label>
        <label id="email"> 
            
            <input placeholder="" name="email" type="text" />
            <span>Email</span>  
        </label>
        <label id="password">
            
            <input placeholder="" name="password" type="text" />   
            <span>Password</span>
        </label>
        <button className={style.btn_reg}>Зарегаться</button>
        </form>


        </div >
    </div>
    
    
}
