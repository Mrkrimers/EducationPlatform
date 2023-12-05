import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css"

function NotFoundPage() {
    return (
        <>
            <Header />

            <main className={style.content}>

                <div className={style.wrapper}>

                    <p>Error 404</p>
                    <h1>Hey Buddy</h1>
                    <p>We can’t seem to find the page you are looking for.</p>

                    <Link to={'/'}>
                        <div className={style.btn}>Go home</div>
                    </Link>
                </div>

                <div className={style.img}></div>

            </main>

            <Footer />
        </>
    )
}

export default NotFoundPage;