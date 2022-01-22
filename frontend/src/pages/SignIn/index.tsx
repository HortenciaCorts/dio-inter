import { Wrapper, Background, InputContainer, ButtonContainer } from "./styled";
import background from '../../assets/images/background-login.jpg';

const SignIn = () => {
    return(
        <Wrapper>
            <Background image={background} />
        </Wrapper>
    );
}

export default SignIn;