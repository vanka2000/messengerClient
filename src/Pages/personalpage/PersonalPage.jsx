import style from './personalpage.module.css'

import Navbar from '../../Components/custom/Navbar'
import Navitem from '../../Components/custom/Navitem'
import DropdownMenu from '../../Components/custom/DropdownMenu'
import Profile from '../../Components/profile/Profile'
import { Send, Leftarrow, Setting, Account } from '../../Service/icons'
import Modal from '../../Components/custom/Modal'
import Pageinfo from '../../Components/pageInfo/PageInfo'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../Service/Api'
import { getUserData } from '../../Redux/slices/userSlice'
import { useDispatch } from 'react-redux'


export default function PersonalPage(){

    const dispatch = useDispatch()

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token')) navigate('/signIn')
        api.getMe()
        api.socket.on('getMe', user => dispatch(getUserData(user)))
    }, [])

    return <div className={style.conteiner}>
        <header>
            <Navbar> 
                <Navitem icon = {<Send/>}><Modal/></Navitem>
                <Navitem icon = {<Account/>}><Profile/></Navitem>
                <Navitem icon = {<Setting/>}><DropdownMenu/></Navitem>
            </Navbar>    
        </header>
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
            <Pageinfo/>
        </div >

    </div>
}