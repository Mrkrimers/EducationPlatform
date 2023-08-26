import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css"

function StudentPage() {
    const arr = [{ h1: 'JavaScript', p: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.' },
    { h1: 'TypeScript', p: `TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules` },
    { h1: 'Python', p: `Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.` }]

    return (
        <>
            <Header isAuth={true} />

            <div className={style.wrapperLogo}>
                <div className={style.imgFluent}></div>
                <h1>Courses</h1>
            </div>


            {arr.map((el) =>
                <div className={style.wrapperBody}>
                    <div className={style.imgOne}></div>

                    <div>
                        <h1>{el.h1}</h1>
                        <div className={style.line}></div>
                        <p>{el.p}</p>
                    </div>
                </div>
            )}






            <Footer />
        </>
    )
}

export default StudentPage;