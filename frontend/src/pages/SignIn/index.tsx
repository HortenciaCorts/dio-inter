import { Wrapper, Background, InputContainer, ButtonContainer } from "./styled";
import background from '../../assets/images/background-login.jpg';
import Card from "../../components/Card";

const SignIn = () => {
    return(
        <Wrapper>
            <Background image={background} />
            <Card width="483px">
                Olá
            </Card>
        </Wrapper>
    );
}

export default SignIn;