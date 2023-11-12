import styles from './chat.module.css'
import { useSelector, useDispatch } from 'react-redux'
import api from '../../Service/Api'
import { Incomemsg, Outgoingmsg } from '../messages/Message'
import { useEffect } from 'react'
import { getMessages, createMessages } from '../../Redux/slices/chatSlice'


export default function Chat ({acceptUser}){
    const user = useSelector(state => state.user.user)
    const initialMessages = useSelector(state => state.chat.messages)





    const newMessage = function(event){  // функция для сбора данных из формы, для сообщения
        event.preventDefault() // чтобы при нажатии на форму не перезагружалась страница
         const form = event.target
         const {message} = form.elements
         api.addMessage({message : message.value, user, idChat : acceptUser.chat._id})
         form.reset()
     }


    return  <div className={styles.messengerSection}>
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
    
}