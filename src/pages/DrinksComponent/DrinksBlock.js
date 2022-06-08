import { useState } from 'react';
import styled from 'styled-components';
import {Button, Cost, CostPrice, Price, Rouble, Img, TextInfo, Varients} from '../PizzaCompontent/PizzaBlock';
import DrinksVarient from './DrinksVarient';

const Block = styled.div`
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s;
    &:hover {
        box-shadow: 8px 8px 7px #F0F0F0;
    }
`
const DrinkName = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
    margin-bottom: 12px;
`

const DrinkInfo = styled.div`
    padding: 0 20px 20px;
`
const DrinksBlock = ({img, name, prices, varients}) => {

    const [price, setPrice] = useState(prices[0]['0,5l']);

    const changePrice = (e) => {
        setPrice(prices[0][[e.target.placeholder]])
    }


    return ( 
        <Block>
            <Img src={img} alt={name}/>
            <DrinkInfo>
                <DrinkName>
                    {name}
                </DrinkName>
                <TextInfo>Volume:</TextInfo>
                <Varients>
                    {varients.map((item, id) => {
                        return (
                            <DrinksVarient
                                key={id}
                                name={item}
                                place={name}
                                onChange={(item) => changePrice(item)}
                            />
                        )
                    })}
                </Varients>
                <Cost>
                    <Button>Choose</Button>
                    <CostPrice>
                        <Price>
                            {price}
                        </Price>
                        <Rouble>
                            BYN
                        </Rouble>
                    </CostPrice>
                </Cost>
            </DrinkInfo>
        </Block>
     );
}
 
export default DrinksBlock;