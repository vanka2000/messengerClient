import style from './navbar.module.css'


export default function Navbar({children}){
    return(
        <nav className={style.navbar}>
            <p className={style.logo}>Vchate</p>
            <ul className={style.navbar_nav}>{children}</ul>
        </nav>
    )
}