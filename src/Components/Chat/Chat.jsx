import styles from './chat.module.css'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../Service/Api'
import { Incomemsg, Outgoingmsg } from '../messages/Message'
import { useEffect, useState } from 'react'
import { getMessages, createMessages } from '../../Redux/slices/chatSlice'


export default function Chat ({acceptUser}){
    const user = useSelector(state => state.user.user)
    const initialMessages = useSelector(state => state.chat.messages)
    const [message, setMessage] = useState('')




    const newMessage = function(){  // функция для сбора данных из формы, для сообщения
        api.addMessage({message : message, user, idChat : acceptUser.chat._id})
     }


    return  <div className={styles.messengerSection}>
                <div className={styles.smsblock}>
                    {initialMessages.map((item, index)  =>  {
                        return   item.user.email === user.email ? <Outgoingmsg key={index} message={item.message} time={new Date()}/> 
                            : <Incomemsg key={index} message={item.message} time={new Date()}/>
                    })}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    newMessage()
                    e.target.reset()
                }} 
                onKeyDown={e => e.key === 'Enter' ? newMessage() : false} className={styles.form}>
                    <textarea name='message' onInput={(e) => setMessage(e.target.value)} className={styles.textarea} 
                        placeholder="Написать сообщение">
                            {message}
                    </textarea>
                    <button className={styles.send}>Send</button>
                </form>
            </div>
    
}