import style from './modal.module.css'
import React from 'react'

export default function Modal({setOpen}){


    return<>
        <div className={style.modal} onClick={e => {
            if(e.target.classList.contains(style.modal)) setOpen(false)
        }}>
            <div className={style.modal_content}>
                <form className={style.form_search_friends}>
                    <input></input>
                </form>
                <button className={style.btn_find} onClick={() => console.log('Hello')}>Найти</button>
            </div>
        </div>
    </>
    
}