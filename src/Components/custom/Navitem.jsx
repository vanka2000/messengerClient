import { useState } from 'react'
import style from'./navitem.module.css'
import React from 'react'

export default function Navitem({children, icon}){
    
    const [open, setOpen] = useState(false)

    const Children = React.cloneElement(children, {setOpen})

    return(
        <li className={style.nav_item }>
            <button className={style.icon_button} onClick={(e) => setOpen(!open)}>
                {icon}
            </button>
            {open && Children}
        </li>
    )
}