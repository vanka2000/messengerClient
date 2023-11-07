import style from './customIcon.module.css'

function OnlineIcon(){
    return(
<div className={style.online_block}></div>
    )
}
  function OfflineIcon(){
    return(
        <div className={style.ofline_block}></div>
    )
}
export {OnlineIcon,OfflineIcon}