import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.css'

function LoginPage() {
    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Login</h1>

                    <div >
                        <input placeholder='Login' />
                    </div>
                    <div>
                        <input placeholder='Password' />
                    </div>

                    <div className={style.btnLogin}>Login</div>
                </div>

                <div className={style.imgLogo}></div>
            </div>

            <Footer />
        </>
    )
}

export default LoginPage;