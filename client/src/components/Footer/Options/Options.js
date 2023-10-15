import { Link } from "react-router-dom";

function Options(props) {
    return (
        <>
            {props.data.map((el, index) => <Link key={index} to={"/*"}>
                <p>{el}</p> </Link>)}
        </>
    )
}

export default Options;