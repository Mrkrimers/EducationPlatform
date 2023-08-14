import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input'
import style from './style.module.css'
import { Button } from '@mui/material/';

function LoginPage() {
    const array = [{ text: "email", type: "text" }, { text: "password", type: "password" }]

    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Login</h1>

                    <Input data={array} />

                    <Button className={style.btnLogin} variant="contained">Login</Button>
                </div>

                <div className={style.imgLogo}></div>
            </div>

            <Footer />
        </>
    )
}

export default LoginPage;