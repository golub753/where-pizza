import { Container } from "../components/Container";
import styled from 'styled-components';
import PizzaBlocks from "../components/Pizza/PizzaCompontent/PizzaBlocks";
import SushiBlocks from "../components/Sushi/SushiComponent/SushiBlocks";
import DrinksBlocks from '../components/Drinks/DrinksComponent/DrinksBlocks';
import SnackBlocks from '../components/Snacks/SnacksComponent/SnackBlocks';
import Loader from '../UI/Loader';
import { useSelector } from 'react-redux/es/exports';

const Title = styled.div`
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #191919;
    margin-bottom: 32px;
`

const Block = styled.div`
    margin-bottom: 50px;
`

const Home = () => {
    const pizza = useSelector(state => state.pizza.pizza);
    const sushi = useSelector(state => state.sushi.sushi);
    const drinks = useSelector(state => state.drinks.drinks);
    const snacks = useSelector(state => state.snacks.snacks);

    return ( 
        <div className="Home">
            <Container>
                <Block>
                    <Title>Pizza</Title>
                    {(pizza.length > 0) ? <PizzaBlocks items={pizza.slice(0, 8)}/> : <Loader/>}
                </Block>
                <Block>
                    <Title>Sushi</Title>
                    {(sushi.length > 0) ? <SushiBlocks items={sushi.slice(0, 8)}/> : <Loader/>}
                </Block>
                <Block>
                    <Title>Drinks</Title>
                    {(drinks.length > 0) ? <DrinksBlocks items={drinks.slice(0, 8)}/> : <Loader/>}
                </Block>
                <Block>
                    <Title>Snacks</Title>
                    {(snacks.length > 0) ? <SnackBlocks items={snacks.slice(0, 8)}/> : <Loader/>}
                </Block>
            </Container>
        </div>
     );
}
 
export default Home;