import { InputHTMLAttributes } from 'react'
import { InputContainer } from "../../pages/SignIn/styled";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return(
        <InputContainer>
            <input {...props} />
        </InputContainer>
    )
}

export default Input;