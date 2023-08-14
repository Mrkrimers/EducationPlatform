import { TextField } from '@mui/material'

function InputReg({ data }) {
    return (
        <>
            {data.map((el, index) => <div key={index}>
                <TextField type={el.type} label={el.text} variant="outlined" />
            </div>)}
        </>)
}

export default InputReg;