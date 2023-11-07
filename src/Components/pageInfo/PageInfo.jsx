import { useEffect, useState } from 'react'
import styles from './pageinfo.module.css'
import { users } from '../../Service/users'
import { OnlineIcon, OfflineIcon} from '../custom/customIcon'
import { Incomemsg,Outgoingmsg } from '../messages/Message'
import { useSelector } from 'react-redux'

export default function Pageinfo(){
    const user = useSelector(state => state.user.user)
    const [acceptUser, setAcceptUser] = useState({})
    const [inter, setInterface] = useState(false)
    const [messages, setMessages] = useState([
        {createId : 1, message : 'Hello', time: new Date()}, 
        {createId : 1, message : 'How are you?', time: new Date()}
    ])
    const users = useSelector(state => state.chat.chats)
    const [filteredUsers, setFilteredUsers] = useState(users)


    useEffect(() => {
        setTimeout(() => setInterface(true), 1000)
    }, [])

    function filterUsers(e){
        const value = e.target.value
        setFilteredUsers(users.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    const newMessage = function(event){  // функция для сбора данных из формы, для сообщения
       event.preventDefault() // чтобы при нажатии на форму не перезагружалась страница
        const form = event.target
        const {message} = form.elements
        const date = new Date()
        setMessages([...messages, {time : date, message : message.value, createId : user.ID}]) 
        form.reset()
    }
    
    return <div className={`${styles.profile_info} ${inter ? styles.visible : ''}`}>
                <div className={styles.leftBar}>
                    <input onChange={filterUsers} type="text" placeholder='Search...'/>
                    {filteredUsers.map((item, index) => {
                        return <div className={styles.user_conteiner} key={index} onClick={() => setAcceptUser(item)}>
                            {item.name}
                            {item.online ? <OnlineIcon/> : <OfflineIcon/>}
                        </div>
                    })} 
                </div>
                <div className={styles.messenger}>
                    <div className={styles.messengerHeader}>
                        <div className={styles.messengerHeader_info}>
                            {acceptUser.name}
                            {acceptUser.online ? <OnlineIcon/> : <OfflineIcon/>}
                        </div>
                        
                    </div>
                    <div className={styles.messengerSection}>
                        <div className={styles.smsblock}>
                            {messages.map((item, index)  =>  {
                                return   item.createId === user.ID ? <Outgoingmsg key={index} message={item.message} time={item.time}/> 
                                    : <Incomemsg key={index} message={item.message} time={item.time}/>
                            })}
                        </div>
                        <form onSubmit={newMessage} className={styles.form}>
                            <textarea width='80%' name='message' height='90px' className={styles.textarea} placeholder="Написать сообщение"></textarea>
                            <button className={styles.send}>Send</button>
                        </form>
                    </div>
                </div>
            </div>

}