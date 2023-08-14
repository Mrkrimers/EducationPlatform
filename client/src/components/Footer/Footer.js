import Options from './Options/Options'
import style from './style.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.navigation}>
                
                <div className={style.navWeb}>
                    <Options data={['Home', 'Textbook', 'Statistics', 'Sprint']} />
                </div>

                <div className={style.navName}>
                    <Options data={['Alex', 'Gabriel', 'Marcus']} />
                </div>

            </div>

            <div className={style.greyLine}></div>

            <div className={style.logoHschool}>

                <div className={style.imgLittle}>
                    {['imgCat', 'imgGT', 'imgYoutube'].map((el, index) => <div key={index} className={style[el]}></div>)}
                </div>

                <p>©2021 Hschool. Project for Hschool.</p>
            </div>
        </div>
    )
}

export default Footer