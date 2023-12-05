
import { useContext } from 'react'
import style from './style.module.css'
import { Link, useNavigate } from 'react-router-dom'
import MyContext from '../../context/MyContext'

function Header({ isAuth }) {
    const navigate = useNavigate()
    const { logOut } = useContext(MyContext)

    const singOut = () => {
        logOut();
        navigate('/login')
    }

    return (

        <div className={style.wrapper}>
            <Link to={'/'}> <h1>Hschool</h1></Link>

            <div className={style.btns}>
                {!isAuth ? (<>
                    <Link to={'/login'}>
                        <div className={style.login}> Login → </div>

                    </Link>

                    <Link to={'/registration'}>
                        <div className={style.signUp}> Sign Up </div>
                    </Link>
                </>) : (
                    <div className={style.signUp} onClick={singOut}>
                        Sign Out
                    </div>
                )}

            </div>
        </div>

    )
}

export default Header