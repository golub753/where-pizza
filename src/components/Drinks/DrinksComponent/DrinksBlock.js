import { useState } from 'react';
import styled from 'styled-components';
import {Button, Cost, CostPrice, Price, Rouble, Img, TextInfo, Varients} from '../../Pizza/PizzaCompontent/PizzaBlock';
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
const DrinksBlock = ({image, name, prices, varients, getItem}) => {

    const [price, setPrice] = useState(prices[0]['0,5l']);
    const [varient, setVarient] = useState(varients[0])

    const changePrice = (e) => {
        setPrice(prices[0][[e.target.placeholder]])
        setVarient(e.target.placeholder);
    }


    return ( 
        <Block>
            <Img src={image} alt={name}/>
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
                                check={(id === 0) ? true : false}
                                onChange={(item) => changePrice(item)}
                            />
                        )
                    })}
                </Varients>
                <Cost>
                    <Button onClick={() => getItem({image, name, price, varient})}>Choose</Button>
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