import { useEffect, useState } from 'react';
import style from'./signin.module.css';
import api from '../../Service/Api';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useMemo } from 'react';



export default function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        api.socket.on('auth', ({token, message, err}) => {
            if(!token) return console.error(message, err)
            localStorage.setItem('token', token)
            navigate('/personalPage')
        })    
    }, [])

    const sub = function(event){    //функция для сбора данных с форма,и последующей отправки этих данных на сервер
        event.preventDefault()  //сбрасывает поведение сабмита,и делает его по умолчанию (запрещает перезагружать страинцу при сабмите)
        const [email,password] = Array.from(event.target).map((item) => item.value) //
        const data = {email,password} //объект с нашими инпутами,который мы отправим на сервер
        api.signIn(data)
    }
   
    
    return <div className={style.signin_conteiner}> 
        
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
        <form className={style.form_signin} onSubmit={sub}>
        <h1 className={style.title}>Log In</h1>
       <label>
       <input value={email} onInput={e => setEmail(e.target.value)} name="email" type="text" placeholder="" />
       <span>Email</span>
       </label>
       <label>
       <input value={password} onInput={e => setPassword(e.target.value)} name="password" type="text" placeholder="" />
       <span>Password</span>
       </label>
       <button className={style.btn_enter}>Войти</button>
       <Link to={'/register'}>Зарегаться</Link>
</form>
</div>
    </div>
}
