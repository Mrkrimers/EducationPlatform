import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input'
import style from './style.module.css'
import { Button } from '@mui/material/';
import axios from 'axios';

function LoginPage() {

    const [inp, setInp] = useState({
        email: '',
        pwd: ''
    })

    async function getLog() {
        debugger
        const response = await axios.post('http://localhost:3001/api/auth', inp)
        console.log(response);
    }

    const array = [{ text: "email", type: "text" },
    { text: "pwd", type: "password" }]

    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Login</h1>

                    <Input data={array} setInp={setInp} inp={inp} />

                    <Button className={style.btnLogin}
                        variant="contained"
                        onClick={getLog}>Login</Button>
                </div>

                <div className={style.imgLogo}></div>
            </div>

            <Footer />
        </>
    )
}

export default LoginPage;