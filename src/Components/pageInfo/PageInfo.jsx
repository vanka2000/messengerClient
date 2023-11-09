import { useEffect, useState } from 'react'
import styles from './pageinfo.module.css'
import { users } from '../../Service/users'
import { OnlineIcon, OfflineIcon} from '../custom/customIcon'
import { Incomemsg,Outgoingmsg } from '../messages/Message'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../Service/Api'
import { getChats, getMessages, createMessages } from '../../Redux/slices/chatSlice'


export default function Pageinfo(){
    const user = useSelector(state => state.user.user)
    const initialMessages = useSelector(state => state.chat.messages)
    const [acceptUser, setAcceptUser] = useState({member : {}, chat : {}})
    const [inter, setInterface] = useState(false)
    // const [messages, setMessages] = useState(initialMessages)
    const chats = useSelector(state => state.chat.chats)
    // const [filteredUsers, setFilteredUsers] = useState(chats)
    

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => setInterface(true), 1000)
        api.getChats(user.chats)
        api.socket.on('getChats', ({chats, message, err}) => {
            if(err) return console.error(message, err)
            dispatch(getChats(chats))
        })

        api.socket.on('getMessages', ({messages, message, err}) => {
            if(err) return console.error(message, err)
            dispatch(getMessages(messages))
        })

    }, [])

    // function filterUsers(e){
    //     const value = e.target.value
    //     setFilteredUsers(users.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))
    // }
    function activeChat(member, chat){
        // console.log(member);
        api.getMesseges(chat._id)
        // console.log(member, chat);
        setAcceptUser({chat, member})
    }

    const newMessage = function(event){  // функция для сбора данных из формы, для сообщения
       event.preventDefault() // чтобы при нажатии на форму не перезагружалась страница
        const form = event.target
        const {message} = form.elements
        const date = new Date()
        api.addMessage({message : message.value, user, idChat : acceptUser.chat._id})
        form.reset()
    }
    
    return <div className={`${styles.profile_info} ${inter ? styles.visible : ''}`}>
                <div className={styles.leftBar}>
                    <input /*onChange={filterUsers}*/ type="text" placeholder='Search...'/>
                    {chats.map((item, index) => {
                        if(!item) return
                        const member = item.members.filter(item => item.name !== user.name)[0]
                        return <div className={styles.user_conteiner} key={index} onClick={() => activeChat(member, item)}>
                            {member.name}
                            {item.online ? <OnlineIcon/> : <OfflineIcon/>}
                        </div>
                    })} 
                </div>
                <div className={styles.messenger}>
                    <div className={styles.messengerHeader}>
                        <div className={styles.messengerHeader_info}>
                            {acceptUser.member.name}
                            {acceptUser.online ? <OnlineIcon/> : <OfflineIcon/>}
                        </div>
                        
                    </div>
                    <div className={styles.messengerSection}>
                        <div className={styles.smsblock}>
                            {initialMessages.map((item, index)  =>  {
                                return   item.user.email === user.email ? <Outgoingmsg key={index} message={item.message} time={new Date()}/> 
                                    : <Incomemsg key={index} message={item.message} time={new Date()}/>
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