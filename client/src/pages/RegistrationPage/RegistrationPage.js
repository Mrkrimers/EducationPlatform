import style from './style.module.css'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function RegistrationPage() {
    return (
        <>
            <Header />

            <div className={style.wrapper}>
                <div className={style.info}>
                    <h1>Sign Up</h1>

                    <div >
                        <input placeholder='Login' />
                    </div>
                    <div>
                        <input placeholder='Password' />
                    </div>
                    <div>
                        <input placeholder='Password' />
                    </div>
                    <div>
                        <input placeholder='Password' />
                    </div>

                    <div className={style.btnLogin}>Sign Up</div>
                </div>

                <div className={style.imgLogo}></div>
            </div>

            <Footer />
        </>
    );
}

export default RegistrationPage;