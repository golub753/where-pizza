import { MenuWrap, Nav, NavLink, Img, Text } from './MenuComponents/MenuComponents';
import { Container } from '../Container';

const Menu = () => {
    return ( 
        <MenuWrap>
            <Container>
                <Nav>
                    <NavLink to='/pizza'>
                        <Img src='https://golub753.github.io/where-pizza/images/icons/pizza.svg'/>
                        <Text>Pizza</Text>
                    </NavLink>
                    <NavLink to='/sushi'>
                        <Img src='https://golub753.github.io/where-pizza/images/icons/sushi.svg'/>
                        <Text>Sushi</Text>
                    </NavLink>
                    <NavLink to='/snacks'>
                        <Img src='https://golub753.github.io/where-pizza/images/icons/Snacks.svg'/>
                        <Text>Snacks</Text>
                    </NavLink>
                    <NavLink to='/drinks'>
                        <Img src='https://golub753.github.io/where-pizza/images/icons/drinks.svg'/>
                        <Text>Drinks</Text>
                    </NavLink>
                </Nav>
            </Container>
        </MenuWrap>
     );
}
 
export default Menu;