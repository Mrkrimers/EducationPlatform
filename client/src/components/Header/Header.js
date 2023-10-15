
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
            <h1>
                <Link to={'/'}>Hschool</Link>
            </h1>

            <div className={style.btns}>
                {!isAuth ? (<>
                    <div className={style.login}>
                        <Link to={'/login'}>Login →</Link>
                    </div>

                    <div className={style.signUp}>
                        <Link to={'/registration'}>Sign Up</Link>
                    </div>
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