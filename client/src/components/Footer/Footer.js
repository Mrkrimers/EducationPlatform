import style from './style.module.css'

function Footer() {
    return (
        <>
            <div className={style.navigation}>
                <div className={style.navWeb}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>

                <div className={style.navName}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>

            <div className={style.greyLine}></div>

            <div className={style.logoHschool}>

                <div className={style.imgLittle}>
                    <div className={style.imgCat}></div>
                    <div className={style.imgGT}></div>
                    <div className={style.imgYoutube}></div>
                </div>

                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </>
    )
}

export default Footer