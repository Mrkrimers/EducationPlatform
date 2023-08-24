import style from './style.module.css'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputReg from '../../components/Input/Input';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { useState } from 'react';

function RegistrationPage() {
    const array = [{ text: "name", type: "text" },
    { text: "surname", type: "text" },
    { text: "email", type: "text" },
    { text: "pwd", type: "password" }]

    const [inp, setInp] = useState({
        name: '',
        surname: '',
        pwd: '',
        email: ''
    })

    async function reg() {
        const res = await axios.post('http://localhost:3001/api/register', inp)
        console.log(res);
    }

    return (
        <>
            <Header isAuth={false} />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Sign Up</h1>

                    <InputReg data={array} setInp={setInp} inp={inp} />

                    <Button className={style.btnLogin} variant="contained" endIcon={<SendIcon />} onClick={reg}>
                        Sign Up
                    </Button>
                </div>

                <div className={style.imgLogo}></div>
            </div>

            <Footer />
        </>
    );
}

export default RegistrationPage;