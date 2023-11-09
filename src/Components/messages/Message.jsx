import style from './message.module.css'

function Incomemsg({message, time}){
    return(
        <div className={style.income_block}>
            <div className={style.income}>
                <p>{message}</p>
                <p className={style.time}>{time.getHours() + ':' + time.getMinutes()}</p>
            </div>
        </div>
    )
}
function Outgoingmsg({message, time}){
    return(
        <div className={style.outgoing_block}>
            <div className={style.outgoing}>
                <p> {message}</p>
                <p className={style.time}>{time.getHours() + ':' + time.getMinutes()}</p>
            </div>
        </div>
    )
}

export{Incomemsg,Outgoingmsg}