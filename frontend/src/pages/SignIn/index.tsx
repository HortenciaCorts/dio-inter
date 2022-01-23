import { Wrapper, Background, InputContainer, ButtonContainer } from "./styled";
import Card from "../../components/Card";

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';


const SignIn = () => {
    return(
        <Wrapper>
            <Background image={background} />
            <Card width="483px">
                <img src={logoInter} width={172} height={61} alt="logo-inter" /> 
            </Card>
        </Wrapper>
    );
}

export default SignIn;