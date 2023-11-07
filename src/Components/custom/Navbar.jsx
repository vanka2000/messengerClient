import style from './navbar.module.css'


export default function Navbar({children}){
    console.log(children);
    return(
        <nav className={style.navbar}>
            <ul className={style.navbar_nav}>{children}</ul>
        </nav>
    )
}