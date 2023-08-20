import { TextField } from '@mui/material'

function InputReg({ data, setInp, inp }) {

    function chengeInp(event) {
        setInp({ ...inp, [event.target.name]: event.target.value })
    }

    return (
        <>
            {data.map((el, index) => <div key={index}>
                <TextField name={el.text}
                    type={el.type}
                    label={el.text}
                    variant="outlined"
                    onChange={chengeInp} />
            </div>)}
        </>)
}

export default InputReg;