import { useEffect, useState } from 'react'
import styles from './pageinfo.module.css'
import { OnlineIcon, OfflineIcon} from '../custom/customIcon'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../Service/Api'
import { getChats, getMessages, addChat} from '../../Redux/slices/chatSlice'
import Chat from '../Chat/Chat'


export default function Pageinfo(){
    const user = useSelector(state => state.user.user)
    const [acceptUser, setAcceptUser] = useState({member : {}, chat : {}})
    const [inter, setInterface] = useState(false)
    const chats = useSelector(state => state.chat.chats)
    // const [filteredUsers, setFilteredUsers] = useState(chats)
    

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => setInterface(true), 1000)
        api.getChats(user.chats)
        api.socket.on('getChats', ({chats, message, err}) => {
            if(err && !chats) return console.error(message, err)
            dispatch(getChats(chats))
        })
        api.socket.on('getMessages', ({messages, message, err}) => {
            if(!messages) return console.error(message, err)
            dispatch(getMessages(messages))
        })
        api.socket.on('addFriend', ({chat, message, err}) => {
            console.log(chat);
            if(!chat) return console.error(message, err)
            dispatch(addChat(chat))
        })
    }, [])

    function activeChat(member, chat){
        api.getMesseges(chat._id)
        setAcceptUser({chat, member})
    }

    console.log(chats);

    return <div className={`${styles.profile_info} ${inter ? styles.visible : ''}`}>
                <div className={styles.leftBar}>
                    <input /*onChange={filterUsers}*/ type="text" placeholder='Search...'/>
                    {chats.map((item, index) => {
                        const member = item.members.filter(item => item.name !== user.name)[0]
                        console.log(member);
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
                    
                        {acceptUser && <Chat acceptUser={acceptUser}/>}
                    
                    
                </div>
            </div>

}