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
    const [res, setRes] = useState({});
    const [resLessons, setLessons] = useState([]);

    async function getAllCourses() {
        const response = await axios.get(`http://localhost:3001/course/${id}`)
        console.log(response);
        setRes(response.data[0])
    }

    async function getAllLessons() {
        const response = await axios.get(`http://localhost:3001/lesson/${id}`);
        console.log(response.data);
        setLessons(response.data)
    }

    useEffect(() => {
        getAllCourses();
        getAllLessons()
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
                    {resLessons.map((el) => <p key={el.id}>{el.title}</p>)}
                </div>

            </div>

            <Footer />
        </>
    )
}

export default CoursePage;