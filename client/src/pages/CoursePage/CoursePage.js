import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css"
import { Button } from '@mui/material/';
import { useParams } from "react-router-dom";
// import arr from "../../storage/course.json"
import axios from "axios";

function CoursePage() {
    const { id } = useParams();
    const [res, setRes] = useState({})

    async function getAllCourses() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        console.log(response);
        setRes(response.data[0])
    }

    useEffect(() => {
        getAllCourses();
    }, [])

    return (
        <>
            <Header isAuth={true} />

            <div className={style.wrapper}>

                <div className={style.wrapperCourse}>
                    <div className={style.flex}>
                        <div className={style.img}></div>
                        <form>
                            <h1>{res.course}</h1>
                            <p>{res.description}</p>
                        </form>
                    </div>

                    <Button className={style.btnLogin}
                        variant="contained">Go to course</Button>
                </div>

                <div className={style.wrapperLesson}>
                    <h1>15 lessons</h1>
                    <ul>
                        <li>1. test</li>
                        <li>1. test</li>
                        <li>1. test</li>
                        <li>1. test</li>
                    </ul>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default CoursePage;