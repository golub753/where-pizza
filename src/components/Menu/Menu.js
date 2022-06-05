import { MenuWrap, Nav, NavLink, Img, Text } from './MenuComponents/MenuComponents';
import { Container } from '../Container';

const Menu = () => {
    return ( 
        <MenuWrap>
            <Container>
                <Nav>
                    <NavLink to='/pizza'>
                        <Img src='/images/icons/pizza.svg'/>
                        <Text>Pizza</Text>
                    </NavLink>
                    <NavLink to='/sushi'>
                        <Img src='/images/icons/sushi.svg'/>
                        <Text>Sushi</Text>
                    </NavLink>
                    <NavLink to='/snacks'>
                        <Img src='/images/icons/Snacks.svg'/>
                        <Text>Snacks</Text>
                    </NavLink>
                    <NavLink to='/drinks'>
                        <Img src='/images/icons/drinks.svg'/>
                        <Text>Drinks</Text>
                    </NavLink>
                    <NavLink to='/combo'>
                        <Img src='/images/icons/Combo.svg'/>
                        <Text>Combo</Text>
                    </NavLink>
                </Nav>
            </Container>
        </MenuWrap>
     );
}
 
export default Menu;