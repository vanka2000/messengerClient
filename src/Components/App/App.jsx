import styles from './app.module.css'
import SignIn from '../../Pages/signin/SignIn';
import Register from '../../Pages/register/Register';
import { Routes,Route, useNavigate,} from 'react-router-dom';   //импорт роутинга для авторизации
import PersonalPage from '../../Pages/personalpage/PersonalPage';
import { useEffect } from 'react';

function App() {
    
    const navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')) navigate('/personalPage')
        else navigate('/signIn' )
    }, [])
    
    return <div>
        <header className={styles.header}></header>
        <Routes>
            {/* при добавлении такого маршрута,будет рендериться страница signIn */}
            <Route path='/signIn'  element={<SignIn/>}/> 
            <Route path='/register' element={<Register/>}/>
            <Route path='/personalPage' element= {<PersonalPage/>}/>
        </Routes>
 
    </div>
}

export default App;
