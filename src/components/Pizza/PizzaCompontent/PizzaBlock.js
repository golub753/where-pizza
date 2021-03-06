import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PizzaVarient from './PizzaVarient';
import { addOrderAction } from '../../../store/orderReducer';
import { addCashAction } from '../../../store/cashReducer';

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

export const Img = styled.img`
    display: block;
    width: 80%;
    height: fit-content;
    margin: 0 auto 16px;
`

const PizzaName = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #191919;
    margin-bottom: 12px;
`

const PizzaInfo = styled.div`
    padding: 0 20px 20px;
`

export const TextInfo = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #191919;
    margin-bottom: 12px;
`

export const Varients = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 10px;
    margin-bottom: 16px;
`

export const MyImg = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    position: absolute;
    top: 20px;
    right: 23px;
`

const Vegan = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    position: absolute;
    top: 20px;
`

export const Button = styled.button`
    background: #FF7010;
    border-radius: 6px;
    width: 131px;
    height: 48px;
    cursor: pointer;
    outlone: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Cost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CostPrice = styled.div`
    display: flex;
    align-items: center;
    grid-column-gap: 5px;
`

export const Price = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FF7010;
`

export const Rouble = styled.span`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FF7010;
`

const PizzaBlock = ({image, name, varients, prices, newItem, hot, category, id}) => {
    const dispatch = useDispatch();

    const addOrder = (item) => {
        dispatch(addOrderAction(item))
        dispatch(addCashAction(item.price))
    }

    const [price, setPrice] = useState(prices[0]['25cm']);
    const [varient, setVarient] = useState(varients[0]);

    const changePrice = (e) => {
        setPrice(prices[0][[e.target.placeholder]])
        setVarient(e.target.placeholder);
    }

    return ( 
        <Block>
            <Img src={image} alt={name}/>
            <PizzaInfo>
                <PizzaName>{name}</PizzaName>
                <TextInfo>Size:</TextInfo>
                <Varients>
                    {varients.map((item, id) => {
                        return (
                            <PizzaVarient
                                key={id}
                                id={id}
                                name={item}
                                place={name}
                                check={(id === 0) ? true : false}
                                onChange={(item) => changePrice(item)}
                            />
                        )
                    })}
                </Varients>
                {(newItem) ? <MyImg src='https://golub753.github.io/where-pizza/images/image/new.png'/> : false}
                {(hot) ? <MyImg src='https://golub753.github.io/where-pizza/images/image/hot.png'/> : false}
                {(category === 'veg') ? <Vegan src='https://golub753.github.io/where-pizza/images/image/vegan.png'/> : <Vegan src='https://golub753.github.io/where-pizza/images/image/nonvegan.png'/>}
                <Cost>
                    <Button onClick={() => addOrder({id, image, name, price, initialPrice: price, newItem, hot, category, varient, counter: 1})}>Choose</Button>
                    <CostPrice>
                        <Price>
                            {price}
                        </Price>
                        <Rouble>
                            BYN
                        </Rouble>
                    </CostPrice>
                </Cost>
            </PizzaInfo>
        </Block>
     );
}
 
export default PizzaBlock;