import style from './togle.module.css'

export default function Toggle ({icon, title}){

    


    return <button className={style.btn} style={{backgroundImage : `url(${icon})`}}>
        <p className={style.title_btn}>{title}</p>
    </button>
}