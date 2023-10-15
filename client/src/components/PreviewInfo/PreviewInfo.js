import { Link } from 'react-router-dom'
import style from './style.module.css'

function PreviwInfo() {
    return (
        <>
            <div className={style.preview}>
                <div className={style.previewInfo}>

                    <p className={style.discription}>E-COURSE PLATFORM</p>
                    <h1>Learning and teaching online, made easy.</h1>
                    <p className={style.info}>Any subject, in any language, on any device, for all ages!</p>

                    <Link to={'/*'}>
                        <div className={style.btnInfo}>About platform</div>
                    </Link>

                    <div className={style.statistics}>

                        <div className={style.lightWrapper}>
                            <div className={style.lightning}></div>
                            <p>
                                600 <span>+</span>
                            </p>
                        </div>
                        <p className={style.student}>Students</p>

                    </div>
                </div>

                <div className={style.previewGuy}></div>
            </div>

            <div className={style.wrapper}>
                <div className={style.learnLanguage}>
                    <div className={style.imgGirl}></div>

                    <div className={style.info}>
                        <h1>Learn a language in a playful way</h1>
                        <p>Make learning programming languages more fun with mini-games</p>

                        <div className={style.format}>
                            <div className={style.imgSprint}></div>
                            <div className={style.imgTask}></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.knowledge}>
                <div className={style.info}>
                    <h1>Increase your knowledge</h1>
                    <p>Traditional and new effective approaches to learning languages</p>

                    <Link to={'/*'}>
                        <div className={style.btnText}>Textbook →</div>
                    </Link>
                </div>

                <div className={style.imgGirl2}></div>
            </div>

            <div className={style.wrapper}>

                <div className={style.watch}>

                    <div className={style.imgTogether}></div>
                    <div className={style.lastInfo}>
                        <h1>Watch your progress every day</h1>
                        <p>Save statistics on your achievements and mistakes</p>

                        <Link to={'/*'}>
                            <div className={style.btnStatistics}>Statistics → </div>
                        </Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default PreviwInfo