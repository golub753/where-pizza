import { Container } from "../Container";
import { HeaderContainer, HeaderWrapper, Home, Logo, Text, Button, Bag, Info, Num, Rub } from "./HeaderComponents/HeaderComponents";

const Header = () => {
    return ( 
        <HeaderContainer>
            <Container>
                <HeaderWrapper>
                    <Home href="/">
                        <Logo src="/images/icons/logo.svg" alt="logo"/>
                        <Text>
                            Where Pizza
                        </Text>
                    </Home>
                    <Button>
                        <Bag src="/images/icons/bag.svg" alt="bag"/>
                        <Info>
                            <Num>0</Num>
                            <Rub>Br</Rub>
                        </Info>
                    </Button>
                </HeaderWrapper>
            </Container>
        </HeaderContainer>
     );
}
 
export default Header;