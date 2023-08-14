import style from './style.module.css'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputReg from '../../components/Input/Input';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function RegistrationPage() {
    const array = [{ text: "name", type: "text" },
    { text: "surname", type: "text" },
    { text: "email", type: "text" },
    { text: "password", type: "password" }]

    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Sign Up</h1>

                    <InputReg data={array} />

                    <Button className={style.btnLogin} variant="contained" endIcon={<SendIcon />}>
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