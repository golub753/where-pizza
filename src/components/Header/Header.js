import { Container } from "../Container";
import { HeaderContainer, HeaderWrapper, Home, Logo, Text } from "./HeaderComponents/HeaderComponents";

import ButtonBug from './ButtonBug/ButtonBug';

const Header = () => {
    return ( 
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Home to="/">
                        <Logo src="https://golub753.github.io/where-pizza/images/icons/logo.svg" alt="logo"/>
                        <Text>
                            Where Pizza
                        </Text>
                    </Home>
                    <ButtonBug/>
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
     );
}
 
export default Header;