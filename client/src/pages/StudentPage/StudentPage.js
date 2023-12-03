import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "./style.module.css"
import { Pagination } from '@mui/material';
import { Link } from "react-router-dom";
import axios from "axios"

function StudentPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [arr, setArr] = useState([]);
    const [size] = useState(2);

    const lastInd = currentPage * size;
    const firstInd = lastInd - size;

    async function getAll() {
        const response = await axios.get('http://localhost:3001/course/');
        setArr(response.data);
    }

    useEffect(() => {
        getAll();
    }, [])

    const item = arr.slice(firstInd, lastInd);

    const handleChange = (_event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <Header isAuth={true} />

            <div className={style.wrapperLogo}>
                <div className={style.imgFluent}></div>
                <h1>Courses</h1>
            </div>

            {item.map((el, ind) =>
                <Link to={`/course/${el.id}`} key={ind} >

                    <div className={style.wrapperBody}>
                        <div className={ind % 2 === 0 ? style.imgOne : style.imgTwo}></div>

                        <div className={style.course}>
                            <h1>{el.course}</h1>
                            <div className={style.line}></div>
                            <p>{el.description}</p>
                        </div>
                    </div>

                </Link>

            )}

            <Pagination className={style.paginstion} count={Math.ceil(arr.length / size)}
                variant="outlined"
                color="primary"
                page={currentPage}
                onChange={handleChange} />

            <Footer />
        </>
    )
}

export default StudentPage;