import { Container } from "../Container";
import { HeaderContainer, HeaderWrapper, Home, Logo, Text } from "./HeaderComponents/HeaderComponents";

import ButtonBug from './ButtonBug/ButtonBug';

const Header = ({price}) => {
    return ( 
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Home to="/where-pizza">
                        <Logo src="https://golub753.github.io/where-pizza/images/icons/logo.svg" alt="logo"/>
                        <Text>
                            Where Pizza
                        </Text>
                    </Home>
                    <ButtonBug price={price}/>
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
     );
}
 
export default Header;