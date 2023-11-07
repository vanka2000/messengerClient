import style from './message.module.css'

function Incomemsg({message, time}){
    return(
        <div className={style.income_block}>
            <p>{message}</p>
            <p className={style.time}>{time.getHours() + ':' + time.getMinutes()}</p>
        </div>
    )
}
function Outgoingmsg({message, time}){
    return(
        <div className={style.outgoing_block}>
            <p> {message}</p>
            <p className={style.time}>{time.getHours() + ':' + time.getMinutes()}</p>
        </div>
    )
}

export{Incomemsg,Outgoingmsg}