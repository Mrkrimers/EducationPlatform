function Options(props) {
    return (
        <>
            {props.data.map((el, index) => <p key={index}>{el}</p>)}
        </>
    )
}

export default Options;