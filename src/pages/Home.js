import { Container } from "../components/Container";
import styled from 'styled-components';
import PizzaBlocks from "./PizzaCompontent/PizzaBlocks";
import SushiBlocks from "./SushiComponent/SushiBlocks";
import DrinksBlocks from './DrinksComponent/DrinksBlocks';
import SnackBlocks from './SnacksComponent/SnackBlocks';
import { useEffect, useState } from "react";
import GetData from '../API/GetData';
import Loader from '../UI/Loader';

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

const Home = ({ pizza, sushi, drinks, snacks }) => {

    return ( 
        <div className="Home">
            <Container>
                <Block>
                    <Title>Pizza</Title>
                    {(pizza) ? <PizzaBlocks items={pizza.slice(0, 8)}/> : <Loader/>}
                </Block>
                <Block>
                    <Title>Sushi</Title>
                    {(sushi) ? <SushiBlocks items={sushi.slice(0, 8)}/> : <Loader/>}
                </Block>
                <Block>
                    <Title>Drinks</Title>
                    {(drinks) ? <DrinksBlocks items={drinks.slice(0, 8)}/> : <Loader/>}
                </Block>
                <Block>
                    <Title>Snacks</Title>
                    {(snacks) ? <SnackBlocks items={snacks.slice(0, 8)}/> : <Loader/>}
                </Block>
            </Container>
        </div>
     );
}
 
export default Home;